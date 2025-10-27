const mongoose = require('mongoose')

const blogPostSchema = new mongoose.Schema({
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
    image:{
        data:Buffer,
        contentType:String
    },
    author:{ type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'}


}, {timestamps:true})

module.exports = mongoose.model('blogPsst',blogPostSchema)