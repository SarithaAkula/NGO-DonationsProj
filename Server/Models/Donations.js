const mongoose = require('mongoose');

const donationsSchema = new mongoose.Schema({
    donationId:number,
    donationType:String,
    
});


module.exports = mongoose.model('Donations', donationsSchema);