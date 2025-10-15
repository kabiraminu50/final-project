const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
    type:String,
required:true,
unique:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        required:true,
        type:String
    }
},  {timestamps:true})

module.exports = mongoose.model('user',userSchema)