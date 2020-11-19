const express = require('express');
const app = express();
const nameRouter = express.Router();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

nameRouter.route('/')
    .all((req,res,next)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        next();
    })
    .get((req,res)=>{
        res.end("I got your request... and trying to processing...")
    })
    .post((req,res)=>{
        res.end(`your data ${req.body} is resived`);
    });
    nameRouter.route('/:name/')
    .all((req,res,next)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        next();
    })
    .get((req,res)=>{
        res.end("I got your request... and trying to processing..."+req.params.name)
    })
    .post((req,res)=>{
        res.end(`your data ${req.body} is resived`);
    });

module.exports = nameRouter;