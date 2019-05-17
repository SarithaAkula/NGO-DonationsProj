const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    phone: Number,
    address1: String,
    address2: String,
    city: String,
    state: String,
    postCode: Number,
    country: String,
    urbanization: String,
    role: String
});


module.exports = mongoose.model('user', userSchema);