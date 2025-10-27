const express = require('express')
const app = express();
const port = 8000
require('dotenv').config();
app.use(express.json());
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const multer = require('multer')
connectDB()
const userAuthRoutes = require('./routes/userAuthRoutes');
const blogPostRoute = require('./routes/blogPostRoute')


app.use('/api/auth',userAuthRoutes)

app.use('/api/post',blogPostRoute)

app.get('/',(req,res) => {
    res.send('Blog is running')  
})

app.listen(port, () => {console.log(`server is running on port http://localhost:8000`) })