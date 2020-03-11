const hashtagsRouter = require('express').Router();
const { getSingleHashtag, updateSingleHashtag, deleteSingleHashtags, addNewHashtag, hashtagsBasedOnPost} = require('../../queries/Hashtag/Hashtags');

// hashtagsRouter.get('/', getAllHashtags);
hashtagsRouter.get('/', hashtagsBasedOnPost)
hashtagsRouter.get('/:post_id', getSingleHashtag);
hashtagsRouter.post('/',addNewHashtag);
hashtagsRouter.patch('/:tag_name',updateSingleHashtag);
hashtagsRouter.delete('/:id',deleteSingleHashtags);

module.exports = hashtagsRouter;
