const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://sanzid:sandi@cluster0.khenm.mongodb.net/<dbname>?retryWrites=true&w=majority',{ useNewUrlParser: true },()=>{
    console.log("connectred");
})

const authRouter = require('./auth/register');

app.use('/api/auth',authRouter);
app.listen(3000,()=>console.log('Server is up and running...'));