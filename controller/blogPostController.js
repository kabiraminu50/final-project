const BlogPost = require('../models/blogPost');
const mongoose = require('mongoose');
const { post } = require('../routes/userAuthRoutes');

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

//fechting all post

const getAllPost = async (req,res) => {

try{

    const post = await BlogPost.find().sort({createdAt: -1})
  
    return res.status(200).json({
    success:true,
    count:post.length,
    data:post

    })

}catch(err){
    
  
    return res.status(500).json({
        success:false,
        err:message
    })
}

}

const getSinglePost = async (req,res) => {

try{

const post = await BlogPost.findById(req.params.id)

return res.status(200).json({
    success:true,
    count:post.length,
    data:post
})

}catch(err){

    
    return res.status(500).json({
        success:false,
        message:err.message
    })
}

}


const deleteBlogPost = async (req,res) => {

    try{
    

        const post = await BlogPost.findByIdAndDelete(req.params.id)
            if (!post){
 
                return res.status(400).json({
                    success:false,
                    message:'post delete is unsucessfull'
                })
        }
        
        return res.status(200).json({
            success:true,
            message:'post deleted successfully'

        })

    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

const updateBlogPost = async (req,res) => {

    try{
        const updatePost = await BlogPost.findByIdAndUpdate(req.params.id)
         

        return res.status(200).json({
            success:true,
            message:'post updated',
            data:updatePost
        })

    }catch(err){

        return res.status(500).json({
            success:false,
            message:err.message,
    
        })
    }
}



module.exports = {createBlogPost,getAllPost,getSinglePost,deleteBlogPost,updateBlogPost}