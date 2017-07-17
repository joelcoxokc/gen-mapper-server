const router = require('express').Router();
const controller = require('./controller');

router.post('/login', (...a)=> controller.login(...a));
router.post('/signup', (...a)=> controller.signup(...a));

module.exports = router;