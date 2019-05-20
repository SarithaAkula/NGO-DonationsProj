const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    orderId:Number,
    donationType:String,
    price:Number,
    monthly:Boolean,
    date:Date
    
});


module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);