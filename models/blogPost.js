const mongoose = require('mongoose')

const blogPost = new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    subtitle:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true

    },
    author:{ type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'}


}, {timestamps:true})
module.exports = mongoose.Schema('blogPost',blogPostSchema)