const uploadRouter = require('express').Router();
const {singleImage} = require('../../queries/Uploads/Uploads');

uploadRouter.post('/', singleImage);

module.exports = uploadRouter