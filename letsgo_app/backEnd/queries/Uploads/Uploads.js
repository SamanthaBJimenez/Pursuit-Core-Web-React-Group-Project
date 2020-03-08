const db = require('../../db/index');
const multer = require('multer');
const path = require('path');
const express = require('express');
const app = express()

let imgUrlPath;

const storage = multer.diskStorage({
   destination: "./assets/uploads/",
   filename: function(req, file, cb){
      imgUrlPath= "IMAGE-" + Date.now() + path.extname(file.originalname)
      cb(null,imgUrlPath);
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("myImage");


app.post("/uploadphoto", (req, res) => {
   upload(req, res, 
    function(err) {
      console.log("Request ---", req.body);
      console.log("Request file ---", req.file);
      
      res.json("/uploads/" + req.file.filename)
   }
   )
});

const singleImage = async (req, res, next) =>{
   try{
      let image = await db.none(`INSERT INTO Posts (poster_id, imageURL, content, time_stamp) VALUES('${req.body.poster_id}', '${req.body.imgUrlPath}', '${req.body.content}', '${req.body.time_stamp}')`)
      res.status(200).json({
         status: 'success',
         message: 'image upload was successful',
         payload: image
      })
      
   }catch(error){
      res.status(400).json({
         status: error,
         message: 'could not create the new Upload'
      })
      
   }
}

module.exports = {singleImage}