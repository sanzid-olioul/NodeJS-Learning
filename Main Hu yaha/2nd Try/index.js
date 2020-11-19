const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const router = express.Router();
const url = 'mongodb://localhost:27017/';
const bodyparser = require('body-parser');
const port = 3030;
const hostname = 'localhost';

const dbname = 'conFusion';

router.route('/')
.all((req,res,next)=>{
    res.status = 200;
    res.setHeader('Content-Type','application/json');
    next();
})
.get((req,res)=>{
    MongoClient.connect(url,(err,client)=>{
        assert.strictEqual(err,null);
        console.log('Connection Successfull');
        db=client.db(dbname);
        const collection = db.collection('students');
        collection.find({}).toArray((err,data)=>{
            assert.strictEqual(err,null);
            console.log(data);
            const jsonData = JSON.stringify(data);
            res.end(jsonData);
        })
    })
})
.post((req,res)=>{
    MongoClient.connect(url,(err,client)=>{
        assert.strictEqual(err,null);
        console.log('Connection Successfull');
        db=client.db(dbname);
        const collection = db.collection('students');
        collection.insertOne({'name':req.body.name,'uni':req.body.uni},(err,docs)=>{
            assert.strictEqual(err,null);
            console.log(docs);
            res.end('Successfully Added in Database');
        })
    })
})

app.use(bodyparser.json());
app.use('/send',router);

app.use('/',(req,res)=>{
    res.status = 200;
    res.setHeader('Content-Type','text/html');
    res.end(`<html><head><title>Home</title>Home</head><body><h1>Home Page</h1></body></html>`);
})


app.listen(port,hostname,()=>{
    console.log(`Swever is running on http://${hostname}:${port}`);
})

