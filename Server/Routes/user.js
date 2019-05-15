const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const cors = require('cors')


router.use(bodyparser.urlencoded({extended: true}));
router.use(bodyparser.json());

router.use(cors({origin:"http://localhost:4200"},'*','*'));
//post
/*router.post('/api/users', function(req, res, next){
    Game.create(req.body, function(err, game){
        if(err) return next(err);
        res.json(game);
    });
});*/


//get
router.get('/api/users', function(req, res, next){
    User.find(function(err, user){
        if(err) return next(err);
        res.json(user);
    });
});

//get by id
router.get('/api/users/:id', function(req, res, next){
    User.findOne({'_id':req.params.id}).then(function(user){res.json(user);}).catch(err =>{
        res.status(500).json({error: err})})
});


//update
router.put('/api/users/:id', function(req, res, next){
    User.findByIdAndUpdate(req.params.id,req.body,{new: true}, function(err, user){
        if(err) return next(err);
        res.json(user);
    });
});


//delete
router.delete('/api/users', function(req, res, next){
    User.deleteOne(req.body, function(err, user){
        if(err) return next(err);
        res.json(user);
    });
});

//user sign up
router.post('/signup', function (req, res) {
    var saltRounds = 0;
    console.log(req.body);
    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
        if(err){
            return res.status(500).json({
                error: err
            });
        }else{
            const user = new User({
                email:req.body.email,
                password:hash,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                address1: req.body.address1,
                address2: req.body.address2,
                city: req.body.city,
                state: req.body.state,
                postCode: req.body.postCode,
                country: req.body.country,
                urbanization: req.body.urbanization,
                role: req.body.role
            });
            user.save().then(function(result){
                console.log(result);
                res.status(200).json({
                    success: "new user created"
                });

            }).catch(err =>{
                res.status(500).json({
                    error: err
                });
            });
        }
    });
    
});

//user sign in
router.post('/signin', function(req, res){
    User.findOne({email:req.body.email})
    .then(function(user){
        bcrypt.compare(req.body.password, user.password, function(err, result){
            if(err){
                return res.status(401).json({
                    failed: 'Unaouthorized Access'
                });
            }

            if(result){
                const JWTToken = jwt.sign({
                    email: user.email,
                    _id: user._id
                },
                'secret',
                {
                    expiresIn: '2h'
                });
                return res.status(200).json({
                    success: 'welcome to the JWT Auth',
                    token: JWTToken
                });                
            }
            return res.status(401).json({
                failed: 'Unauthorized Access'
            });
        });
    }).catch(err =>{
        res.status(500).json({
            error: err
        });
    });
});

router.post('/posts', verifyToken, (req, res) =>{
    jwt.verify(req.token,'secret', (err, authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                msg:"a new post is created",
                authData
            });
        }
    });
});


function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}
module.exports = router;
