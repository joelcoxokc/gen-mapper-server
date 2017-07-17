const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        index: true,
        unique: true
    },
    password: {
        type: String
    },
    name: {
        type: String
    }
})

module.exports = mongoose.model('User', UserSchema);