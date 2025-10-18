const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createBlogPost, getAllPost, getSinglePost, deleteBlogPost, updateBlogPost } = require('../controller/blogPostController');

router.post('/createblogpost',authMiddleware,createBlogPost);
router.get('/getallpost',authMiddleware,getAllPost);
router.get('/getsinglepost',authMiddleware,getSinglePost);
router.delete('/deleteblogpost',authMiddleware,deleteBlogPost);
router.put('/updateblogpost',authMiddleware,updateBlogPost);


module.exports = router