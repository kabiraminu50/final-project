const express = require('express')
const app = express();
const port = 8000
require('dotenv').config();
app.use(express.json());
const mongoose = require('mongoose');
const connectDB = require('./config/db');
connectDB()
const userAuthRoutes = require('./routes/userAuthRoutes')

app.use('/api/auth',userAuthRoutes)

app.get('/',(req,res) => {
    res.send('Blog is running')  
})

app.listen(port, () => {console.log(`server is running on port http://localhost:8000`) })