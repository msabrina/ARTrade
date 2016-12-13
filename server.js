'use strict';
require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const methodOverride = require('method-override');
// const indexRouter = require('./routes/index.js');
const authRouter = require('./routes/auth');
// const usersRouter = require('./routes/users');

const aws = require('aws-sdk');
const fs = require('fs')
const multer = require('multer');
// const multerS3 = require('multer-s3');
const s3 = new aws.S3({params: {Bucket: 'artrade'}});
// aws.config.loadFromPath('./aws-config.json');


// Code adopted from https://gist.github.com/adon-at-work/26c8a8e0a1aee5ded03c

function uploadToS3(file, destFileName, callback) {
  const fullUploadedURL = `http://artrade.s3-website-us-east-1.amazonaws.com/${destFileName.toString()}`
  console.log(fullUploadedURL);
  s3
    .upload({
      ACL: 'public-read',
      Body: fs.createReadStream(file.path),
      // Key: newId,
      // Bucket: process.env.
      Key: destFileName.toString(),
      ContentType: 'image/png' // force download if it's accessed as a top location
    })
    .send(callback);
}


const upload = multer({ dest: 'uploads/'});

app.post('/upload', upload.single('photos'), function(req, res, next) {
  console.log(req.file);


    // get the file from the req object
  const objFile = req.file;

    // create our own random id
  const newId = '1000' + parseInt(Math.random() * 10000000);

  // call the function uploadToS3 and send an anonymous function as third argument
  uploadToS3(objFile, newId, function (err, data) {
    if(err) {
      console.log(err);
      return res.status(500).send('failed to upload to s3').end();
    }
    res.status(200)
      .send('File uploaded to s3')
      .end();
  });
})



// Socket io code acquired from https://github.com/DanialK/ReactJS-Realtime-Chat
const server = require('http').createServer(app);
const socket = require('./routes/socket.js');
const io = require('socket.io').listen(server);
// io.sockets.on('connection', socket);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', require('./routes/api.js'));
// app.get('/api', (req, res) => {
//   res.send('SENDING FROM SERVER')
// })
app.use('/auth', authRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})


app.listen(PORT, () => console.warn(`Server here! Listening on port ${PORT}!`));
