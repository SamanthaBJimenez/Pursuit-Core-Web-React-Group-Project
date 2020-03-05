const db = require('../../db/index');

const getAllHashtags = async (req, res, next) =>{
    try{
        let allHashtags = await db.any('SELECT * FROM Hashtags');
        res.status(200).json({
            status: 'success',
            message: 'retrieves all hashtags',
            payload: allHashtags
        })
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not retrieve all posts'
        })
    }
}

const getSingleHashtag = async (req, res, next) =>{
    try{
        let singleHashtag = await db.one('SELECT * FROM Hashtags WHERE id= $1', [req.params.id]);
        res.status(200).json({
            status: 'success',
            message: 'retrieves single hastags',
            payload: singleHashtag
        })
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not get single hashtag',
        })
    }
}

const addNewHashtag = async (req, res, next) =>{
    try{
        let newHashtag = await db.none('INSERT INTO Hashtags (poster_id, post_id, tag_name) VALUES(${poster_id}, ${post_id}, ${tag_name})', req.body)
        res.status(200).json({
            status: 'success',
            message: 'created a new hashtag',
            payload: newHashtag
        })

    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not created the new hashtag'
        })
    }
}

const updateSingleHashtag = async (req, res, next) =>{
    try{
        let updateHastags = await db.one('UPDATE Hashtags SET poster_id = ${poster_id} post_id = ${post_id}, tag_name = ${tag_name} WHERE id = ${id} RETURNING *', req.body)
        res.status(200).json({
            status: 'succes',
            message: 'updated Hashtags',
            payload: updateHastags
        })
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not update hashtags'
        })
    }
}

const deleteSingleHashtags = async (req, res, next) =>{
    try{
        let deleteHashtags = await db.one('DELETE FROM Hashtags WHERE id = $1 RETURNING *', [req.params.id]);
        res.status(200).json({
            status: 'success',
            message: 'deleted hashtags',
            payload: deleteHashtags
        })
    }catch(error){
        res.status(400).json({
            status: 'error',
            message: 'could not delete user'
        })
    }
}
module.exports = {getAllHashtags, getSingleHashtag, updateSingleHashtag, deleteSingleHashtags, addNewHashtag}