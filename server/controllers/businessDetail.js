const businessDetail = async (req, res) => {
    const businessId = req.params.id;
    console.log('Fetching business details for ID:', businessId);

    const url = `https://api.yelp.com/v3/businesses/${businessId}`;
        const options = {
        method: 'GET',
        headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
        }
    }
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching business details:', error);
        res.status(500).json({ error: 'Failed to fetch business details' });
    }
};

module.exports = businessDetail;