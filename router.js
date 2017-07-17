const userRouter = require('./api/user/router');
const authRouter = require('./api/auth/router');

module.exports = function(app) {
    app.use('/auth', authRouter);
    app.use('/users', userRouter);
}