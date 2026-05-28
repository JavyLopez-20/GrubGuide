const businessDetail = async (req, res) => {
    const businessId = req.params.id;

    const url = `https://places-api.foursquare.com/places/${businessId}`;
        const options = {
        method: 'GET',
        headers: {
            'X-Places-Api-Version': '2025-06-17',
                accept: 'application/json',
        Authorization: `Bearer ${process.env.FOURSQUAREAPIKEY}`
        }
    }
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`FourSquare API error: ${response.statusText}`);
          };
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching business details:', error);
        res.status(500).json({ error: 'Failed to fetch business details' });
    }
};

module.exports = businessDetail;