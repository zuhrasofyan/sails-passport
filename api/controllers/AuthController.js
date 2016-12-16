/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var auth = require('../services/auth');

module.exports = {
    register: function (req,res) {
        auth.register(req,res);
    },
    login: function (req, res) {
        auth.login(req, res);
    },
    validate_token: function (req, res) {
        auth.isvalidtoken(req, res);
    },
    logout: function(req, res){
        //req.logout is passportjs function to clear user information. see http://passportjs.org/docs
        req.logout();
        req.session.destroy();
        res.send(200);
    }
};

