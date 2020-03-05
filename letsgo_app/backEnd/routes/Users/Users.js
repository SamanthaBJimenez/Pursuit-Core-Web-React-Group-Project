const userRouters = require('express').Router()
const {getAllUsers, getSingleUser, getNewUser, deleteSingleUser, updateSingleUser} = require('../../queries/Users/Users');

userRouters.get('/', getAllUsers)
userRouters.get('/:id', getSingleUser)
userRouters.post('/', getNewUser)
userRouters.delete('/:id', deleteSingleUser)
userRouters.patch('/:id', updateSingleUser)

module.exports = userRouters