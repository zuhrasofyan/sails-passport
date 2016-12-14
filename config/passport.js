/**
 * Passport configuration file where you should configure strategies
 */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//var JwtStrategy = require('passport-jwt').Strategy;
var bcrypt = require('bcrypt-nodejs');

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.find({username:username}).exec(function(err, user) {

            if (err) {
                return done(null, err);
            }
            if (!user || user.length < 1) {
                return done(null, false, {
                    message: 'Incorrect User'
                });
            }

            bcrypt.compare(password, user[0].password, function(err, res) {
                if (err || !res) {
                    return done(null, false, {
                        message: 'Invalid Password'
                    });
                } else {
                    return done(null,user);
                }
            });
        });
    })
);

module.exports = {
    http: {
        customMiddleware: function(app) {
            app.use(passport.initialize());
            app.use(passport.session());
        }
    }
};