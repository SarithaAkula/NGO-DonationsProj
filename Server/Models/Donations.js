const mongoose = require('mongoose');

const donationsSchema = new mongoose.Schema({

    donationType:String,
    // amount: Number,
    // date: Date,
    // name: String,
    
});


module.exports = mongoose.model('Donations', donationsSchema);