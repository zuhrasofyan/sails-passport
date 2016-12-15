/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    register: function (req, res) {
        var username = req.param('username');
        var password =req.param('password');
        User.findOne({username:username}).exec(function (err, result){
            if (err) {
                res.status(500).send({message: 'error'})
            } else if (result) {
                res.status(400).send({message: 'user exist'})
            } else {
                User.create({username:username, password:password}).exec(function (err, result){
                    if (err) {
                        return res.serverError(err);
                    }
                    return res.ok();
                })
            }
        });
        //res.send({message: 'TODO: register User'});
    }
};

