let fetch;
import('node-fetch').then((module) => {
  fetch = module.default;
});


exports.businessDetail = async (req, res) => {
    const { businessId } = req.params;
    try {
        const response = await fetch(`https://api.yelp.com/v3/businesses/${businessId}`, {
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
    }
    catch (error) {
        console.error('Error fetching business details:', error);
        res.status(500).json({ error: 'Failed to fetch business details' });
    }
};