const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const authRouter = require('./routes/auth');
const app = express();

dotenv.config();
app.use(bodyParser.json());
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser : true,useUnifiedTopology: true,useCreateIndex: true},()=>{
    console.log("Mongo is connected");
});


app.use('/api/user',authRouter);
app.use('/',(req,res)=>{
    res.end('hiii');
})


const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is up and running`));