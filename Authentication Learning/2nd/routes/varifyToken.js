const { valid } = require('@hapi/joi');
const jwt = require('jsonwebtoken');

module.exports =(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
       return res.status(401).send("Un Authorised...");
    }
    try{
        const varified  = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = varified;
        next();
    }catch(err){
        return res.status(400).send(err);
    }
}