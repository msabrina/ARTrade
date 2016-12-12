'use strict';
require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;
const history = require('connect-history-api-fallback');

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = new aws.S3({})
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const methodOverride = require('method-override');
// const indexRouter = require('./routes/index.js');
const authRouter = require('./routes/auth');
// const usersRouter = require('./routes/users');


// code adopted from https://www.npmjs.com/package/multer-s3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'artrade',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

app.post('/upload', upload.array('photos', 3), function(req, res, next) {
  res.send('Successfully uploaded ' + req.files.length + ' files!')
})

// Socket io code acquired from https://github.com/DanialK/ReactJS-Realtime-Chat
const server = require('http').createServer(app);
const socket = require('./routes/socket.js');
const io = require('socket.io').listen(server);
// io.sockets.on('connection', socket);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(history({ logger: logger }))

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', require('./routes/api.js'));
app.use('/auth', authRouter);


app.listen(PORT, () => console.warn(`Server here! Listening on port ${PORT}!`));
