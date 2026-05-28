const fourSquareAPI = async (req, res) => {

    const { query, near, latitude, longitude } = req.query;

    if (!query)  {
        return res.status(400).json({ error: 'Missing Restaurant/Cuisine' })
    } if (!near && (!latitude || !longitude)) {
        return res.status(400).json({ error: "missing location" })
    }
    try {
        const url = new URL('https://places-api.foursquare.com/places/search');
        url.searchParams.set('query', query);
        if (near) url.searchParams.set('near', near);
        const ll = `${latitude},${longitude}`;
        if (latitude && longitude) url.searchParams.set('ll', ll);

        console.log('Received params:', { query, near, latitude, longitude });
        console.log('Foursquare URL:', url.toString());

        const response = await fetch(url,
        {
            method: 'GET',
            headers: {
                'X-Places-Api-Version': '2025-06-17',
                accept: 'application/json',
                Authorization: `Bearer ${process.env.FOURSQUAREAPIKEY}`,
            },
        });
        if (!response.ok) {
            throw new Error(`FourSquare API error: ${response.statusText}`);
          }

        const data = await response.json();
        res.json(data);
     } catch (error) {
        console.error('Error fetching data from FourSquare:', error);
    res.status(500).json({ error: 'Failed to fetch data from FourSquare' });
     }
    };
    module.exports = fourSquareAPI;