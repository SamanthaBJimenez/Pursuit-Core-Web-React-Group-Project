const hashtagsRouter = require('express').Router();
const {getAllHashtags, getSingleHashtag, updateSingleHashtag, deleteSingleHashtags, addNewHashtag} = require('../../queries/Hashtag/Hashtags');

hashtagsRouter.get('/', getAllHashtags);
hashtagsRouter.get('/:id', getSingleHashtag);
hashtagsRouter.patch('/:id',updateSingleHashtag);
hashtagsRouter.delete('/:id',deleteSingleHashtags);
hashtagsRouter.post('/',addNewHashtag);

module.exports = hashtagsRouter;
