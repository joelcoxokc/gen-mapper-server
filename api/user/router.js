const router = require('express').Router();
const controller = require('./controller');

router.get('/', (...a)=> controller.get(...a));


module.exports = router;