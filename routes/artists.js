const router = require('express').Router();
const db = require('../lib/db.js');
const { createPost } = require('../models/artists');

const path = require('path');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

// router.route('/myposts')
//   .post(createPost, (req, res, next) =>
//     res.json({message: "post created"})
//   )

const aws = require('aws-sdk');
const fs = require('fs')
const multer = require('multer');
// const multerS3 = require('multer-s3');
const s3 = new aws.S3({params: {Bucket: 'artrade'}});


// Code adopted from https://gist.github.com/adon-at-work/26c8a8e0a1aee5ded03c

function uploadToS3(file, destFileName, callback) {
  const fullUploadedURL = `http://artrade.s3-website-us-east-1.amazonaws.com/${destFileName.toString()}`
  console.log(fullUploadedURL);
  s3
    .upload({
      ACL: 'public-read',
      Body: fs.createReadStream(file.path),
      Key: destFileName.toString(),
      ContentType: 'image/png' // force download if it's accessed as a top location
    })
    .send(callback);
}

  const upload = multer({ dest: 'uploads/'});


function doUpload(req, res, next) {
    console.log(req.file);
    // get the file from the req object
  const objFile = req.file;

    // create random id
  const newId = '1000' + parseInt(Math.random() * 10000000);

  // call the function uploadToS3 and send an anonymous function as third argument
  uploadToS3(objFile, newId, function (err, data) {
    if(err) {
      console.log(err);
      return res.status(500).send('failed to upload to s3').end();
    }
    console.log('data', data);
    // res.json({data: data, message: 'here'});
    // res.status(200)
    //   .send('File uploaded to s3')
    //   .end();
    res.urlFile = data.Location;
    next();
  });
}

router.route('/mypost')
  .post(upload.single('image'), doUpload, createPost, (req, res, next) => {res.json(res.rows)})

module.exports = router;

// artistModel.createPost
