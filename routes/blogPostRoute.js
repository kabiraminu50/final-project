const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createBlogPost, getAllPost, getSinglePost, deleteBlogPost, updateBlogPost } = require('../controller/blogPostController');
const upload = require('../middleware/upload')
const uploadAfterAuth = require('../middleware/uploadAfterAuth')


router.post('/createblogpost',authMiddleware,uploadAfterAuth,createBlogPost)
router.get('/getallpost',getAllPost);
router.get('/getsinglepost/:id',authMiddleware,getSinglePost);
router.delete('/deleteblogpost/:id',authMiddleware,deleteBlogPost);
router.put('/updateblogpost/:id',authMiddleware,updateBlogPost);


module.exports = router