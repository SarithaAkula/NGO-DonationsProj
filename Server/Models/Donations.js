const mongoose = require('mongoose');

const donationsSchema = new mongoose.Schema({

    donationType:String,
    
});


module.exports = mongoose.model('Donations', donationsSchema);