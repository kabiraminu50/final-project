const BlogPost = require('../models/blogPost');
const mongoose = require('mongoose');

// creating new blog
const createBlogPost   = async (req,res) =>{

const {title,subtitle,content} = req.body  
if (!title || !subtitle || !content ){
    return res.status(400).json({
        success:false,
        message:'All field (title,subtitle,content) are required'
    })
}

const newPost = await BlogPost.create({title,subtitle,content})
return res.status(201).json({
    success:true,
    message:"new post created",
    data:newPost
})

}

module.exports = {createBlogPost}