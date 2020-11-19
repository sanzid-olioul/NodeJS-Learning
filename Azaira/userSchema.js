const express = require('express');
const mongoose = require('mongoose');

 const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required:true
    },
    roll:{
        type:Number,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    bloodGroup:{
        type: String,
        required:true
    },
    university:{
        type: String,
        required:true
    },
    department:{
        type: String,
        required:true
    },
    batch:{
        type: String,
        required:true
    },
    session:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
 });
 
 module.exports = mongoose.model('cseStudent',userSchema);