const express = require('express');
const User = require('./schema/userSchema');
const mongoose = require('mongoose');
const app = express();

//const database = 'mongodb://localhost:27017/registerd';
const database = 'mongodb+srv://sanzid:854742879@social.xtltj.mongodb.net/registerd?retryWrites=true&w=majority'
mongoose.connect(database,{ useNewUrlParser: true ,useUnifiedTopology: true ,useCreateIndex: true});



app.use('/addUser',(req,res)=>{
    const newUser = new User({
        name: "Arpita Chowdhury Dia",
        email:"arpitachowdhurydia@gmail.com",
        password: "sanzid",
        contact:"14586985758"
    })
    newUser.save((err,doc)=>{
        if(!err){
            console.log(doc);
        }
        else{
            console.log(err);
        }
    });
    res.end('Added');
})
app.use('/',(req,res)=>{
    User.find({})
    .exec((err,data)=>{
        if(!err){
            console.log(data);
        }
        else{
            console.log(err)
        }
        res.end('Shown');
    });
})

app.listen(8080,()=>{
    console.log(`Server is running on port 8080`);
})