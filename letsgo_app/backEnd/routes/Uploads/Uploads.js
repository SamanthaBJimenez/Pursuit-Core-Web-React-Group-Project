const uploadRouter = require('express').Router();
const {singleImage} = require('../../queries/Uploads/Uploads');

uploadRouter.get('/', singleImage);
// uploadRouter.post('/',)

module.exports = singleImage