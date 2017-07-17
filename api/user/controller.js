const User = require('./model');


// var u = new User({
//     name: 'Joel Cox',
//     email: 'joel.cox.dev@gmail.com',
//     password: 091190
// })
// u.save(function(err, kitty){

// })

class UserController {
    
    get(req, res) {
        return User.find()
            .then((users)=> {
                res.json(users);
            })
            .catch(err => {
                res.sendStatus(404);
            })
    }

    create() {}

    update(req, res) {

        return User.findOne({_id: req.body.id})
            .then(user => {
                Object.assign(user, req.body)
                return user.save()
            })
            .then(()=> {
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
            })
    }

    destroy(req, res) {
        return User.findOne({_id: req.params.id})
            .then(user => {
                return user.remove()
            })
            .then(()=> {
                res.sendStatus(200);
            })
            .catch(err => {
                res.sendStatus(500);
            })
    }
}

const controller = new UserController();
module.exports = controller;