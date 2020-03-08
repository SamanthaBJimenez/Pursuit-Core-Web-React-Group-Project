const hashtagsRouter = require('express').Router();
const {getAllHashtags, getSingleHashtag, updateSingleHashtag, deleteSingleHashtags, addNewHashtag} = require('../../queries/Hashtag/Hashtags');

hashtagsRouter.get('/', getAllHashtags);
hashtagsRouter.get('/:tag_name', getSingleHashtag);
hashtagsRouter.post('/',addNewHashtag);
hashtagsRouter.patch('/:tag_name',updateSingleHashtag);
hashtagsRouter.delete('/:id',deleteSingleHashtags);

module.exports = hashtagsRouter;
