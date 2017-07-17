const User = require('../user/model');

class AuthController {
    login(req, res) {
        const model = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({email: model.email})
            .then(user => {
                if (user && user.password === model.password) {
                    res.json({
                        email: user.email,
                        name: user.name,
                        id: user._id
                    });
                } else {
                    res.sendStatus(500)
                }
            })
            .catch(err => {
                res.json({
                    error: err
                })
            })
    }

    signup(req, res) {
        const model = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        model.save()
            .then(data => {
                res.json({
                    email: user.email,
                    name: user.name,
                    id: user._id
                });
            })
            .catch(err => {
                res.json(err)
            })
    }
}


const controller = new AuthController();
module.exports = controller;