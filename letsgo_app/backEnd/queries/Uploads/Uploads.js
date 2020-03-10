const multer = require('multer');
const path = require('path');
const express = require('express');
const app = express()

const singleImage = async (req, res, next) =>{
   try{
      app.use(express.static(path.resolve(__dirname, "./public")))
   
      let imgUrlPath;
   
      const storage = multer.diskStorage({
         destination: "./assets/uploads/",
         filename: function(req, file, cb){
            imgUrlPath="IMAGE-" + Date.now() + path.extname(file.originalname)
            cb(null,imgUrlPath);
         }
      });
   
      const upload = multer({
         storage: storage,
         limits:{fileSize: 1000000},
      }).single("myImage");
      
      upload(req, res, 
         function(err) {
           console.log("Request ---", req.body);
           console.log("Request file ---", req.file);
           res.json({
            status: 'success',
               message: 'image upload was successful',
               payload: req.file.filename,
           })
        })
      
   }catch(error){
      res.status(400).json({
         status: error,
         message: 'could not Upload'
      })
      
   }
}

module.exports = {singleImage}





// app.post("/", (req, res) => {
//    upload(req, res, 
//     function(err) {
//       console.log("Request ---", req.body);
//       console.log("Request file ---", req.file);
      
//       res.json("/uploads/" + req.file.filename)
//    }
//    )
// });