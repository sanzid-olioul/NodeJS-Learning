const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';
const hostname = 'localhost';
const port = 3030;

const dbname = 'conFusion';

const nameRouter = require('./routers/nameRouter');
app.use('/names',nameRouter);
app.use('/db',(req,res)=>{

    MongoClient.connect(url,(err,client)=>{
        assert.strictEqual(err,null);
        console.log(`Mongodb Is connected`);
        db = client.db(dbname);
        const collection = db.collection("students");
        collection.find({}).toArray((err,docs)=>{
            assert.strictEqual(err,null);
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.end(docs[0].uni);
        })
    
    });
})
app.use('/',(req,res)=>{
    res.end('kuttar bassa');
})
app.listen(port,hostname,()=>{
    console.log(`Server is running on http://${hostname}:${port}`);
});