const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// @desc    Auth admin & get token
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });

        if (admin && (await admin.matchPassword(password))) {
            const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
                expiresIn: '30d'
            });

            res.json({
                _id: admin._id,
                username: admin.username,
                token
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { login };
