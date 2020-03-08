const postRouters = require('express').Router();
const { getSinglePost, updateSinglePost, deleteSinglePost, addNewPost, leftJoinPostsUsers} = require('../../queries/Post/Posts');


postRouters.get('/', leftJoinPostsUsers);

postRouters.get('/:id', getSinglePost);
postRouters.post('/', addNewPost);
postRouters.delete('/:id', deleteSinglePost);
postRouters.patch('/:id', updateSinglePost);

module.exports = postRouters