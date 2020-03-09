const userRouters = require('express').Router()
const {getAllUsers, getSingleUser, getNewUser, deleteSingleUser, updateSingleUser,getSingleUserByEmail} = require('../../queries/Users/Users');

userRouters.get('/', getAllUsers)
userRouters.get('/:id', getSingleUser)
userRouters.get('/email/:email', getSingleUserByEmail)
userRouters.post('/', getNewUser)
userRouters.delete('/:id', deleteSingleUser)
userRouters.patch('/:id', updateSingleUser)

module.exports = userRouters