const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    orderId:Number,
    donationType:String,
    price:Number,
    monthly:Boolean,
    date:Date
    
});


module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);