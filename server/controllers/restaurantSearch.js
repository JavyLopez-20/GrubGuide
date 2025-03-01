const yelp = require('yelp-fusion');
const yelpClient = yelp.client(process.env.YELP_API_KEY);

exports.searchRestaurants = async (req, res) => {
    const { term, latitude, longitude, location } = req.query;

    try {
        const searchRequest = {
            term: term || 'restaurants',
            radius: 16093,
        }
        if (latitude && longitude) {
            searchRequest.latitude = latitude;
            searchRequest,longitude = longitude;
        }
        else if (location) {
            searchRequest.location = location;
        }
        else {
            return res.status(400).json({ error: 'Please enter valid location or allow access' })
        }
        const response = await yelpClient.search(searchRequest);
        const restaurants = response.jsonBody.businesses.map(business => ({
            yelpId: business.id,
            name: business.name,
            cuisine: business.categories.map(category => category.title).join(', '),
            location: {
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              coordinates: {
                latitude: business.coordinates.latitude,
                longitude: business.coordinates.longitude,
              },
            },
            rating: business.rating,
            price: business.price,
            imageUrl: business.image_url,
          }));

    res.json(restaurants)

    } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ error: 'Failed to fetch restaurants' });
    }
};