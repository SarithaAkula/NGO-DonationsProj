const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const shoppingCartSchema = require('../Models/ShoppingCart');
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

// Get all orderdetails
router.get('/api/shoppingcart', function(req,res,next)
{
    shoppingCartSchema.find(function(err,cart)
    {
        if (err) return next(err);
        res.json(cart);
    });
});

//Getting single user by Id

router.get('/api/shoppingcart/:id', function(req,res,next){
    shoppingCartSchema.findById(req.params.id, function(err,cart)
    {
        if (err) return next(err);
        res.json(cart);
    });
});

//

//save shoppingcart
router.post('/api/shoppingcart', function(req,res,next){
    shoppingCartSchema.create(req.body,function(err,cart){
        if(err) return next(err);
        res.json(cart);
    });
});

// put for shoppingcart
router.put('/api/shoppingcart/:id',function(req,res,next){
    console.log(req.params.id);
    shoppingCartSchema.findByIdAndUpdate(req.params.id, req.body,{new:true},function(err,cart){
        console.log(req.params.id);
        if(err) return next(err);
        res.json(cart);
    });
});

//Delete for shoppingcart
router.delete('/api/shoppingcart/:id',function(req,res,next){
    console.log(req.params.id);
    shoppingCartSchema.findByIdAndDelete(req.params.id, req.body,function(err,cart){
        
        if(err) return next(err);
        res.json(cart);
    });
});
module.exports = router; 