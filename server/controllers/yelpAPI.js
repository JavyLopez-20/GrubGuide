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