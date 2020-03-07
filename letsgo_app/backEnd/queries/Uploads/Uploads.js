const multer = require('multer');
const path = require('path');
const db = require('../../db/index');


app.use(express.static(path.resolve(__dirname, "./public")))

let imgPath = "IMAGE-" + Date.now() + path.extname(file.originalname);

const storage = multer.diskStorage({
   destination: "./assets/uploads/",
   filename: function(req, file, cb){
      cb(null,imgPath);
   }
});

const singleImage = async (req, res, next) =>{
   try{
      let image = await db.one(`INSERT INTO Posts (poster_id, imageURL, content, time_stamp) VALUES(${poster_id}, ${imgPath}, ${content}, ${time_stamp})`)
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



const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("myImage");

// const router = express.Router();

app.post("/uploadphoto", (req, res) => {
    upload(req, res, 
     function(err) {
       console.log("Request ---", req.body);
       console.log("Request file ---", req.file);
       
       res.json("/uploads/" + req.file.filename)
    }
    )
 });

module.exports = {storage, upload, singleImage}