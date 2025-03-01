exports.validateUser = (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
       return res.status(400).json({ message: 'Invalid username, email or password' });
    }
    if (password.length < 6) {
       return res.status(400).json({ message: 'must be minimum 6 characters or longer' });
    }
    next();
};