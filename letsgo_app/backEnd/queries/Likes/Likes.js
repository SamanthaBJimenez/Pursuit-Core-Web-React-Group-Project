const db = require('../../db/index');

const getPostLikes = async (req, res, next) =>{
    try{
        let allPostLikes = await db.any(`SELECT * FROM Likes WHERE post_id = $1`, req.params.post_id)
        res.status(200).json({
            status: 'success',
            message: 'retrieves all likes for this post',
            payload: allPostLikes
        })
    }catch(error){
        console.log(error)
        res.status(400).json({
            status: 'error',
            message: 'could not retrieve all likes'
        })
    }
}

const addNewLike = async (req, res, next) =>{
    try{
        let newLike = await db.one(`INSERT INTO Likes (liker_id, post_id) VALUES('${req.params.liker_id}', '${req.params.post_id}') RETURNING *`)
        res.status(200).json({
            status: 'success',
            payload: newLike,
            message: 'created a new like'
        })

    }catch(error){
        console.log(error)
        res.status(400).json({
            status: 'error',
            message: 'could not created the new like'
        })
    }
}

const deleteLike = async (req, res, next) =>{
    try{
        let deleteLike = await db.one(`DELETE FROM Likes WHERE liker_id = ${req.params.liker_id} AND post_id = ${req.params.post_id} RETURNING *`);
        res.status(200).json({
            status: 'success',
            message: 'deleted like',
            payload: deleteLike
        })
    }catch(error){
        console.log(error)
        res.status(400).json({
            status: 'error',
            message: 'could not delete like'
        })
    }
}

module.exports = {getPostLikes, addNewLike, deleteLike}