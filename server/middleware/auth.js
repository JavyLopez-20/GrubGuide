const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
        const token = req.header('Authorization')?.replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Denied, no token' })
    }
};