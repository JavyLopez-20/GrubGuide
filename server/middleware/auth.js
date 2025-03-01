const jwt = require('jsonwebtoken');

exports.authenticateUser = (res, req, next) => {
    const token = req.header('Authorization')?.replace('Bearer', '');

    if (!token) {
        res.status(401).json({ message: 'Denied, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userID = decoded.userID;
        next();
    }
    catch (error) {
        res.status(400).json({ message: 'no token' })
    }
};