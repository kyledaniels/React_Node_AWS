const express= require(`express`)
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app=express()

// import routes

const authRoutes = require('./routes/auth');

//app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//app.use(cors());
app.use({orgin: process.env.CLIENT_URL})

//middlewares

app.use('/api',authRoutes);


const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`API is running on port ${port}`);
})