const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../db/user');
const Blacklist = require('../db/blacklist')


exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    user = new User ({ email, password: hashPassword, username });
    await user.save();
    console.log('User registered succesfully', user);
    }
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.loginUser = async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User email not found', email)
            return res.status(400).json({ message: 'Invalid credentials' })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('User password does not match', user.email)
            return res.status(400).json({ message: 'Invalid credentials' })
        }
        secretKey = process.env.JWT_SECRET;

        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
        return res.json({ token });
};