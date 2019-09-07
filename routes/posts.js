const express = require('express');
const Post = require('../models/Post')
const router = express.Router();

// get all posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(error) {
        res.json({message: error});
    }
});

// get specific post by id
router.get('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch(error) {
        res.json({message: error});
    }
});

// create post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });

    try{
        const savedPost = await post.save()
        res.json(savedPost);
    } catch(error){
        res.json({message: error});
    }
});

// delete post
router.delete('/:id', async (req, res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.id})
        res.json(removedPost);
    } catch(error) {
        res.json({message: error});
    }
});

// patch post
router.patch('/:id', async (req, res) => {
    try{
        const patchedPost = await Post.updateOne(
            {_id: req.params.id},
            {$set: {title: req.body.title}}
            )
        res.json(patchedPost);
    } catch(error) {
        res.json({message: error});
    }
});

module.exports = router;
