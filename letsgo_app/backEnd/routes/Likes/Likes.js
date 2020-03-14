const likesRouter = require('express').Router();
const {getPostLikes, addNewLike, deleteLike} = require('../../queries/Likes/Likes');

likesRouter.get('/:post_id', getPostLikes)
likesRouter.post('/:liker_id/:post_id', addNewLike);
likesRouter.delete('/:liker_id/:post_id', deleteLike);

module.exports = likesRouter;