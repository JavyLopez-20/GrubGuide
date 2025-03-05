const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../db/user');

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    user = new User ({ username, email, password: hashPassword  });
    await user.save();

    console.log('User registered succesfully', user);

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
        console.log('User found', user);

        if (!user) {
            console.log('User email not found', email)
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            console.log('User password does not match', user.email)
            return res.status(400).json({ message: 'Invalid credentials' })
        }
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, { expiresIn: '1hr' });
        console.log('token generated', token);

        res.status(201).json({ token });
    }
    catch (error) {
        res.status(400).json({ message: 'Server error' })
    }
};