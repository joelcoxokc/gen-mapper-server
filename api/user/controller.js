const User = require('./model');


var u = new User({
    name: 'Joel Cox',
    email: 'joel.cox.dev@gmail.com',
    password: 091190
})
u.save(function(err, kitty){

})

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
    update() {}
    destroy() {}
}

const controller = new UserController();
module.exports = controller;