const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const {registerValidation,loginValidation} = require('../validation');

const varifyToken = require('./varifyToken');
const router = express.Router();

router.route('/register')
.post(async (req,res)=>{
    const {error} = registerValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    const emailExists= await User.findOne({email : req.body.email});
    if(emailExists){
        return res.status(400).send('Email is already exists');
    }
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(req.body.password,salt);

    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : hasedPassword
    });
   // console.log(user);
    try{
        const savedUser = await user.save();
        //console.log(savedUser);
        res.send(savedUser);
        

    }catch(err){
        console.log(err);
    }
});

router.route('/login')
.post(async (req,res)=>{
    const {error} = loginValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    const user= await User.findOne({email : req.body.email});
    if(!user){
        return res.status(400).send('Email is does not exists');
    }
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass){
        return res.status(400).send('Passward is not valid..');
    }

    const token = jwt.sign({_id : user._id},process.env.TOKEN_SECRET);
    res.header('auth-token',token);
    console.log(user);

    res.status(200).send(user);
});




router.route('/posts')
.get(varifyToken,(req,res)=>{
    res.send(req.user);
})

module.exports = router;