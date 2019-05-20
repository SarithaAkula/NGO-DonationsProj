const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const donationsSchema = require('../Models/Donations');

const cors = require('cors');

router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());
router.use(cors());

router.options("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin", req.get("Origin")||"*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     //other headers here
      res.status(200).end();
  });
//To get all donationTypes
router.get('/api/donations', function(req,res,next)
{
    donationsSchema.find(function(err,donation)
    {
        if (err) return next(err);
        res.json(donation);
    });
});
//To get donationType by id
router.get('/api/donations/:id', function(req,res,next){
    donationsSchema.findById(req.params.id, function(err,donation)
    {
        if (err) return next(err);
        res.json(donation);
    });
});
//Create DonationType
router.post('/api/donations', function(req,res,next){
    donationsSchema.create(req.body,function(err,donation){
        if(err) return next(err);
        res.json(donation);
    });
});

// To Update donationType
router.put('/api/donations/:id',function(req,res,next){
    console.log(req.params.id);
    donationsSchema.findByIdAndUpdate(req.params.id, req.body,{new:true},function(err,donation){
        console.log(req.params.id);
        if(err) return next(err);
        res.json(donation);
    });
});
//To Delete donationType
router.delete('/api/donations/:id',function(req,res,next){
    console.log(req.params.id);
    donationsSchema.findByIdAndDelete(req.params.id, req.body,function(err,donation){
        
        if(err) return next(err);
        res.json(donation);
    });
});

module.exports = router; 