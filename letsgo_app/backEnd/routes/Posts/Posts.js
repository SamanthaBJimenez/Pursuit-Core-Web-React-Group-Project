const postRouters = require('express').Router();
const { getSinglePost, updateSinglePost, deleteSinglePost, addNewPost, leftJoinPostsUsers,getSinglePostByHashTag} = require('../../queries/Post/Posts');


postRouters.get('/', leftJoinPostsUsers);

postRouters.get('/:id', getSinglePost);
postRouters.get('/hashtag/:hashtag', getSinglePostByHashTag);

postRouters.post('/', addNewPost);
postRouters.delete('/:id', deleteSinglePost);
postRouters.patch('/:id', updateSinglePost);

module.exports = postRouters