const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
    role:String,
    phone:Number,
    address1:String,
    address2:String,
    city:String,
    state:String,
    postalcode:Number,
    country:String,
    urbanization:String
    
});



module.exports = mongoose.model('User', userSchema);