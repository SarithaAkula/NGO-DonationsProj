const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema({
    username:String,
    email:String,
    orderId:Number,
    donnationType:String,
    price:Number,
    monthly:Boolean,
    date:Date
    
});


module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);