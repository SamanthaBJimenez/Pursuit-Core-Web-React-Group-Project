const db = require('../../db/index');

const getAllPosts = async (req, res, next) =>{
    try{
        let allPosts = await db.any('SELECT * FROM Posts');
        res.status(200).json({
            status: 'success',
            message: 'retrieves all posts',
            payload: allPosts
        })
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not retrieve all posts'
        })
    }
}

const getSinglePost = async (req, res, next) =>{
    try{
        let singlePost = await db.one('SELECT * FROM Posts WHERE id= $1', [req.params.id]);
        res.status(200).json({
            status: 'success',
            message: 'retrieves single post',
            payload: singlePost
        })
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not get single post',
        })
    }
}

const addNewPost = async (req, res, next) =>{
    try{
        let newPost = await db.none('INSERT INTO Posts (poster_id, description, time_stamp) VALUES(${poster_id}, ${description}, ${time_stamp})', req.body)
        res.status(200).json({
            status: 'success',
            message: 'created a new post',
            payload: newPost
        })

    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not created the new post'
        })
    }
}

const updateSinglePost = async (req, res, next) =>{
    try{
        let updatePost = await db.one('UPDATE Posts SET poster_id = ${poster_id}, description = ${description}, time_stamp = ${time_stamp} WHERE id = ${id} RETURNING *', req.body)
        res.status(200).json({
            status: 'succes',
            message: 'updated user posts',
            payload: updateUser
        })
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not update user'
        })
    }
}

const deleteSinglePost = async (req, res, next) =>{
    try{
        let deletePost = await db.one('DELETE FROM Posts WHERE id = $1 RETURNING *', [req.params.id]);
        res.status(200).json({
            status: 'success',
            message: 'deleted post',
            payload: deletePost
        })
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not delete user'
        })
    }
}
module.exports = {getAllPosts, getSinglePost, updateSinglePost, deleteSinglePost, addNewPost}