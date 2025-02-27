const User = require('../models/user');

exports.getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate('favorites');
    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addFavorite = async (req, res) => {
  const { restaurantId } = req.body;

  try {
    const user = await User.findById(req.userId);
    user.favorites.push(restaurantId);
    await user.save();
    res.json({ message: 'Restaurant added to favorites' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
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