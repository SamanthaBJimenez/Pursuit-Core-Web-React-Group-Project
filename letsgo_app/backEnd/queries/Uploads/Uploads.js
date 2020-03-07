const multer = require('multer');
const path = require('path');
const db = require('../../db/index');



app.use(express.static(path.resolve(__dirname, "./public")))

const storage = multer.diskStorage({
   destination: "./assets/uploads/",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

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