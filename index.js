const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./connect.json');

mongoose.Promise = global.Promise;
 
mongoose.connect(config.mongoURI);

const app = express();

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(express.static('./'));
app.use(cors());
app.use(urlencodedParser);

router(app);

app.listen(8000, function() {
    console.log('app listening on localhost:8000')
})