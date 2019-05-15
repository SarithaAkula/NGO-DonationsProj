const donation=require('../modules/donation');



const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');

const PORT =3000;
//const app =express();
app.use(bodyParser.json());
app.use(cors("*","*","*"));
//const route = require('./routes/route');

const db='mongodb://localhost:27017/mongo-ngodonations'
mongoose.connect(db, err=> {
    if (err){
        console.log('error!' + err);
    }else{
        console.log('connected to mongodb')
    }
})





app.post('/donations',function(req,res,next) {
    donation.create(req.body,function(err, donation){
        if(err) return next(err);
        res.json(donation);
    });
});

app.get('/donations',function(req, res) {
    donation.find(function(err,donation){
        if(err) return next(err);
        res.json(donation);
    });
}
);

app.get('/donations/:id',function(req, res) {
    donation.findById(req.params.id,req.body,function(err,donation){
        if(err) return next(err);
        res.json(donation);
    });
}
);

app.delete('/donations/:id',function(req,res,next){
    donation.findByIdAndRemove(req.params.id,req.body,function(err,donation){
        if(err) return next(err);
        res.json(donation);
    });
});

app.update('/donations/:id',function(req,res,next){
    donation.findByIdAndUpdate(req.params.id,req.body,function(err,donation){
        if(err) return next(err);
        res.json(donation);
    });
});

app.listen(PORT,function() {
    console.log('server running on localhost' + PORT)
});

