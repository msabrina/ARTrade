const db = require('../db/db.js');
const jwt = require('jsonwebtoken');

function createPost (req, res, next) {
  const title = req.body.title || 'sample title';
  const description = req.body.description || 'sample description';
  const image_url = res.urlFile;
  db.one(`INSERT INTO post (title, description, image_url) VALUES ($1, $2, $3) RETURNING *;`, [title, description, image_url])
    .then((data) => {
      res.rows = data;
      next();
    })
  .catch(error => console.log(error))
}

module.exports = {
  createPost
}
