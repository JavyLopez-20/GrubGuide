const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer', '');

        if (!token) {
            return res.status(401).json({ message: 'Denied, no token' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userID = decoded.userID;
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'no token' })
    }
};