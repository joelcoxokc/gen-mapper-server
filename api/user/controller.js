const User = require('./model');


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