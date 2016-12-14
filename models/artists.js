const db = require('../lib/db.js');
const jwt = require('jsonwebtoken');

function createPost (req, res, next) {
  const title = req.body.title || 'sample title';
  const description = req.body.description || 'sample description';
  const fair_id = req.body.fair_id || '3';
  const image_url = res.urlFile;
  db.one(`INSERT INTO post (post_title, post_description, image_url, fair_id) VALUES ($1, $2, $3, $4) RETURNING *;`, [title, description, image_url, fair_id])
    .then((data) => {
      res.rows = data;
      next();
    })
  .catch(error => console.log(error))
}

module.exports = {
  createPost
}
