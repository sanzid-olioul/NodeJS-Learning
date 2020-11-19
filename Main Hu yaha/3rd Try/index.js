const express = require('express');
const bodyparser = require('body-parser');
const app = express()
const port = 8080;
const hostname = 'localhost';




app.use(bodyparser.json());
app.listen(port,hostname,()=>{
    console.log(`the server is running on http://${hostname}:${port}/`);
});