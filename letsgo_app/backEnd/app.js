const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
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