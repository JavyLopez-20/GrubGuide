const User = require('../db/user');

exports.getProfile = async (req, res) => {
  const { userId } = req.user;
  try {
    const user = await User.findById(userId).select("username favorites");
    if (!user) {
      console.log("User not found for ID:", userId);
      return res.status(404).json({ message: "User not found" });
    }
    console.log("User found:", user);
    res.json({
      username: user.username,
      favorites: user.favorites || [],
    });
  } catch (err) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.addFavorite = async (req, res) => {
  const { businessId, name, image_url } = req.body;
  const  userId  = req.user?.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    if (user.favorites.some((fav) => fav.businessId === businessId)) {
      return res.status(400).json({ error: 'Restaurant already favorited' })
    }

    user.favorites.push({ businessId, name, image_url })
    await user.save();
    res.json({ message: 'Added to favorites' })
  } catch (error) {
    res.status(500).json({ message: 'error adding favorites', error });
  }
};

exports.removeFavorite = async (req, res) => {
  const { businessId } = req.params;
  const { userId } = req.user?.id;

  try {
    const user = await User.findById(userId);
    user.favorites = user.favorites.filter((fav) => fav.businessId !== businessId);
    await user.save();
    res.json({ message: 'Restaurant removed from favorites' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getFavorites = async (req, res) => {
  const  userId  = req.user?.id;
  try {
       const user = await User.findById(userId);
       if (!user) {
        return res.status(404).json({ message: "user not found" })
       }
       res.json(user.favorites);
      } catch (err) {
        console.error("Error fetching favorites:", err);
        res.status(500).json({ error: "Server error" });
      }
};

exports.checkFavorites = async (req, res) => {
  const  userId  = req.user?.id;
  const { businessId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isFavorited = user.favorites.some((fav) => fav.businessId === businessId);
    res.json({ isFavorited });
  } catch (err) {
    console.error("Error checking favorite status:", err);
    res.status(500).json({ error: "Server error" });
  }
};