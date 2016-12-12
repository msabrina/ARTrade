const router = require('express').Router();
const { getAllFairs } = require('../models/Fairs');


router.get('/', getAllFairs, (req, res) => {
  res.json(res.fairs || []);
});

module.exports = router;
