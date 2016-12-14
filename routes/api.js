const router = require('express').Router();
const db = require('../lib/db.js');
const artistsRouter = require('./artists.js');

const { getAllFairs, getAllPosts } = require('../models/Fairs');

router.use('/artists', artistsRouter)

router.get('/', getAllFairs, getAllPosts, (req, res) => {
  res.json({
    fairs: res.fairs,
    posts: res.posts,
  });
});


module.exports = router;
