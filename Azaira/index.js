const express = require('express');
const User = require('./userSchema');
const mongoose = require('mongoose');
const app = express();
const aa= require('./Data');
//const database = 'mongodb://localhost:27017/registerd';
const database = 'mongodb+srv://sanzid:854742879@cluster0.2mgrg.mongodb.net/pust?retryWrites=true&w=majority';
mongoose.connect(database,{ useNewUrlParser: true ,useUnifiedTopology: true ,useCreateIndex: true});

app.use('/up',(req,res)=>{


    User.insertMany(aa).then(function(){ 
        console.log("Data inserted")  // Success 
    }).catch(function(error){ 
        console.log(error)      // Failure 
    });

    /*
        let i =2;
        setInterval(()=>{
            i++;
        const newUser = User({
            name : aa[i].name ,
            roll : aa[i].roll,
            email : aa[i].email,
            phone: aa[i].phone,
            bloodGroup: aa[i].bloogGroup,
            university: aa[i].university,
            department: aa[i].department,
            batch: aa[i].batch,
            session: aa[i].session
        });
        newUser.save((err,doc)=>{
            if(!err){
                console.log(doc);
            }
            else{
                console.log(err);
            }
        });
        res.end(aa[i].name ," is added to database");
    },500)
    */
})

app.listen(8080,()=>{
    console.log('server is up and running');
})