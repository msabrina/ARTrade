const router = require('express').Router();
const db = require('../db/db.js');
const artistsRouter = require('./artists.js');

const { getAllFairs } = require('../models/Fairs');

router.use('/artists', artistsRouter)

router.get('/', getAllFairs, (req, res) => {
  res.json(res.rows || []);
});


module.exports = router;
