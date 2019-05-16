const express = require('express');
const app = express();
const mongoose = require("mongoose");
const users = require('./Routes/user');

app.use('/',users);

//connect to db
const db = 'mongodb://localhost:27017/NGO-Donations'
mongoose.connect(db, { useNewUrlParser: true }, err => {
    if(err){
        console.log('Error !' +err);
    }else{
        console.log('connected to mongodb');
    }
});
//default route
app.get('/',(req,res) => {
    res.send('Default route');

});
const port = process.env.port || 4000;
app.listen(port,() => console.log("listening on port" + port)) ;