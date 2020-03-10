const db = require('../../db/index');

const leftJoinPostsUsers = async (req, res, next) =>{
    try{
        let leftJoin = await db.any('SELECT Posts.id, Posts.imageurl, Posts.content, Users.username, Users.profilePic FROM Posts LEFT JOIN Users ON Posts.poster_id = Users.id ORDER BY time_stamp DESC');
        res.status(200).json({
            status: 'success',
            message: 'left join was a success',
            payload: leftJoin
        })
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'left join was not success'
        })

    }
}

const getAllPosts = async (req, res, next) =>{
    try{
        let allPosts = await db.any('SELECT * FROM Posts ORDER BY time_stamp DESC');
        res.status(200).json({
            status: 'success',
            message: 'retrieves all posts',
            payload: allPosts
        })
    }catch(error){
        console.log(error)
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
        console.log(error)
        res.status(400).json({
            status: 'error',
            message: 'could not get single post',
        })
    }
}

const addNewPost = async (req, res, next) =>{
    try{
        let newPost = await db.none(`INSERT INTO Posts (poster_id, imageURL, content) VALUES('${req.body.poster_id}', '${req.body.imageURL}', '${req.body.content}')`)
        res.status(200).json({
            status: 'success',
            message: 'created a new post'
        })

    }catch(error){
        console.log(error)
        res.status(400).json({
            status: 'error',
            message: 'could not created the new post'
        })
    }
}

const updateSinglePost = async (req, res, next) =>{
    try{
        let updatePost = await db.one(`UPDATE Posts SET poster_id = $/poster_id/, imageURL = $/imageURL/, content = $/content/ WHERE id = ${req.params.id} RETURNING *`, req.body)
        res.status(200).json({
            status: 'succes',
            message: 'updated user posts'
        })
    }catch(error){
        console.log(error)
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
        console.log(error)
        res.status(400).json({
            status: 'error',
            message: 'could not delete user'
        })
    }
}
module.exports = {getAllPosts, getSinglePost, updateSinglePost, deleteSinglePost, addNewPost, leftJoinPostsUsers}