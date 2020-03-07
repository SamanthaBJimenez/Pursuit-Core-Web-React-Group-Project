const hashtagsRouter = require('express').Router();
const {getAllHashtags, getSingleHashtag, updateSingleHashtag, deleteSingleHashtags, addNewHashtag} = require('../../queries/Hashtag/Hashtags');

hashtagsRouter.get('/', getAllHashtags);
hashtagsRouter.get('/:id', getSingleHashtag);
hashtagsRouter.post('/',updateSingleHashtag);
hashtagsRouter.delete('/:id',deleteSingleHashtags);
hashtagsRouter.patch('/',addNewHashtag);

module.exports = hashtagsRouter;
