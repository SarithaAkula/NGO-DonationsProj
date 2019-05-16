const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//const bcrypt =require('bcrypt');
//const jwt =require('jsonwebtoken');
const bodyParser = require('body-parser');
const donation=require('../Models/Donations');
const cors=require('cors');

const app = express();


router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());
router.use(cors());
//const app =express();

//const route = require('./routes/route')




router.post('/Home/donationTypes',function(req,res,next) {
    donation.create(req.body,function(err, donation){
        if(err) return next(err);
        res.json(donation);
    });
});

router.get('/Home/donationTypes',function(req, res) {
    donation.find(function(err,donations){
        if(err) return next(err);
        res.json(donations);
    });
}
);

router.get('/Home/donationTypes/:id',function(req, res) {
    donation.findById(req.params.id,req.body,function(err,donation){
        if(err) return next(err);
        res.json(donation);
    });
}
);

router.delete('/Home/donationTypes/:id',function(req,res,next){
    donation.findByIdAndRemove(req.params.id,req.body,function(err,donation){
        if(err) return next(err);
        res.json(donation);
    });
});

router.put('/Home/donationTypes/:id',function(req,res,next){
    donation.findByIdAndUpdate(req.params.id,req.body,function(err,donation){
        console.log(req.params.id)
        if(err) return next(err);
        res.json(donation);
    });
});

module.exports = router;