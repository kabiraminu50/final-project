const mongoose = require('mongoose')

const connectDB = async () => {
    try{
mongoose.connect(process.env.MONGO_URL)
console.log("connectDB successfully")
    }catch(err){
        console.error('connectDb failed',err.message)
    }
}

module.exports = connectDB