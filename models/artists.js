const db = require('../db/db.js');
const jwt = require('jsonwebtoken');

function createPost (req, res, next) {
  db.one(`INSERT INTO posts (title, description, image_url, post_id)`)
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const user_id = res.userData.user_id;
  const imageCount = Object.keys(req.files).length;


  db.one(queryOne, values)
  .then((inserted) => {
    res.insertedPost = inserted;
    values.push(parseInt(inserted.post_id));
    db.none(queryTwo, values)
    .then(() => next())
    .catch(err => next(err));
  })
  .catch(err => next(err));
}
