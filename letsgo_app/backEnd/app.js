const express = require('express');
const multer = require('multer');
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3005;
const app = express()

const hashtagsRouter = require('./routes/Hashtags/Hashtags')
const postsRouter = require('./routes/Posts/Posts');
const usersRouter = require('./routes/Users/Users');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/hashtags', hashtagsRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

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
// app.get("/", (req, res) => {
//     res.json({
//       random: "this is a GET"
//     });
//   });
//   app.post("/", (req, res) => {
//     res.json({
//       random: "this is a POST"
//     });
//   });

app.listen(port, ()=>{
    console.log('listenin to port ' + port)
})