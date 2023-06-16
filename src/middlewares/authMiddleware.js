const jwt = require('../lib/jwt');
const { secret } = require('../config/config');

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, secret);

            req.user = decodedToken;

            next()
        } catch (err) {
            res.clearCookie('auth');
            return res.redirect('/users/login');
        }

    } else {
        next()
    }
}