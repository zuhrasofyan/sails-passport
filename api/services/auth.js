var passport = require('passport');
var jwt = require('jsonwebtoken');
//var User = 

module.exports = {
    login: function (req, res) {
        passport.authenticate('local', function (err, user) {
            if (!user) {
                res.status(400).send({
                    success: false,
                    message: 'invalidLogin'
                });
                return;
            } else {
                if (err) {
                    res.status(400).send({
                        success: false,
                        message: 'unknownError',
                        error: err
                    });
                } else {

                    var token = jwt.sign(user[0], sails.config.secret, {expiresIn: 60 * 24});
                    // Set persistent cookie
                    req.session.cookie.token = token;
                    res.send({
                        success: true,
                        user: user[0],
                        token: token
                    });
                }
            }
        })(req, res);
    },
    isvalidtoken: function (req, res) {
        if (req.headers.authorization) {
            jwt.verify(req.headers.authorization.replace('Bearer ', ''), sails.config.secret, function (err, decoded) {
                //418 = I'm a teapot!
                if (err) return res.status(418).send({success: false, message: 'invalid'});
                if (decoded) {
                    return res.send({success: true, user: decoded[0]});
                }
            });
        } else {
            return res.status(418).send({success: false, message: 'token invalid'});
        }
    }
};
