const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hashPassword(password, salt);

    user = new User ({ username, email, password: hashPassword })
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1hr' })

    res.status(201).json({ token });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, { expiresIn: '1hr' });

        res.status(201).json({ token });
    }
    catch (error) {
        res.status(400).json({ message: 'Server error' })
    }
};