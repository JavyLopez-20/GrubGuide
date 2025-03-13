const yelpAPI = async (req, res) => {

    const { term, latitude, longitude, location } = req.query;
    if (!term)  {
        return res.status(400).json({ error: 'Missing Restaurant/Cuisine' })
    }

    try {
        const url = location ? `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`: `https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}`;

        const response = await fetch(url,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.YELP_API_KEY}`,
            },
        });
        if (!response.ok) {
            throw new Error(`Yelp API error: ${response.statusText}`);
          }

        const data = await response.json();
        res.json(data);
     } catch (error) {
        console.error('Error fetching data from Yelp:', error);
    res.status(500).json({ error: 'Failed to fetch data from Yelp' });
     }
    };
    module.exports = yelpAPI;
//         const savedRestaurants = await Promise.all
//         data.businesses.map(async (business) => {
//             let restaurant = await Restaurant.findOne({ yelpId: business.id });
//             if (!restaurant) {
//                 restaurant = new Restaurant({
//                     yelpId: business.id,
//                         name: business.name,
//                         address: business.location.address1,
//                         city: business.location.city,
//                         state: business.location.state,
//                         zipCode: business.location.zip_code,
//                         cuisine: business.categories.map((cat) => cat.title).join(', '),
//                         rating: business.rating,
//                         imageUrl: business.image_url,
//                 });
//                 await restaurant.save();
//             }
//             return restaurant;
//         })
//         res.json(savedRestaurants)

//     } catch (error) {
//         console.error("Error catching yelp api", error)
//         res.status(500).json({ error: "Failed to fetch data" })

// };