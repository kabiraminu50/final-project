const BlogPost = require('../models/blogPost');

// Create new blog post
const createBlogPost = async (req, res) => {
  try {
    const { title, subtitle, content } = req.body;
    

if(!req.file){
  return res.status(400).json({
    success:false,
    message: "image is required"
  })
}



    if (!title || !subtitle || !content) {
      return res.status(400).json({
        success: false,
        message: 'All fields (title, subtitle, content) are required'
      });
    }

const imageUrl = req.file.path;

    

  
    const newPost = await BlogPost.create({
      title,
      subtitle,
      content,
      imageUrl
    });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: newPost
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Fetch all posts
const getAllPost = async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: posts.length,
      data: posts
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Fetch single post
const getSinglePost = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: post
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Delete post
const deleteBlogPost = async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post deletion unsuccessful'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Post deleted successfully'
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Update post
const updateBlogPost = async (req, res) => {
  try {
    const { title, subtitle, content } = req.body;

    const updatedPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      { title, subtitle, content },
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Post updated successfully',
      data: updatedPost
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

module.exports = {
  createBlogPost,
  getAllPost,
  getSinglePost,
  deleteBlogPost,
  updateBlogPost
};