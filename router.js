const userRouter = require('./api/user/router');


module.exports = function(app) {
    app.use('/users', userRouter);
}