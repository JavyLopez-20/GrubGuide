const User = require('../db/user');
const Restaurant = require('../db/restaurant');

exports.getFavorites = async (req, res) => {
    const { userId } = req.query;

  try {
    const user = await User.findById(req.userId).populate('favorites');
    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addFavorite = async (req, res) => {
  const { userId,restaurantId } = req.body;

  try {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    const restaurant = await Restaurant.findById(req.restaurantId);
    if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' })
    }

    if (!user.favorites.includes(restaurantId)) {
    user.favorites.push(restaurantId);
    await user.save();
    }

    res.json({ message: 'Restaurant added to favorites', favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ message: 'error adding favorites', error });
  }
};

exports.removeFavorite = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const user = await User.findById(req.userId);
    user.favorites = user.favorites.filter(fav => fav.toString() !== restaurantId);
    await user.save();
    res.json({ message: 'Restaurant removed from favorites' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getProfile = async (req, res) => {
    try {
       const user = await User.findById(req.userId);
       if (!user) {
        return res.status(404).json({ message: "user not found" })
       }
       res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ message: "error fetching profile", error })
    }
};