const businessDetail = async (req, res) => {
    const url = `https://api.yelp.com/v3/businesses/${req.params.id}`;
        const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        authorization: `Bearer ${process.env.YELP_API_KEY}`
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