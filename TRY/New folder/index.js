const express = require('express');
const http = require('http');
const router = require('router');
const app = express();
const port = 8080;
const hostname = 'localhost' ;


router.Route('/').all((req,res,next)=>{
    res.setHeader('content-type','application/json')
})



app.use('/go',(req,res)=>{
    res.end('Let go ...');
})
app.listen(port,hostname,()=>{
    console.log(`Server is running on port`);
});



