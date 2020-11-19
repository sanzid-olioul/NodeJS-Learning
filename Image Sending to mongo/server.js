const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const app = express();
const PORT = 5000;

const mongoURI = ' mongodb://127.0.0.1:27017/users';




app.use(bodyParser.json());

app.use(methodOverride('_method'));







app.listen(PORT,()=>{
    console.log(`Server is up an running`)
})
