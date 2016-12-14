const db = require('../lib/db.js');
const jwt = require('jsonwebtoken');


function getAllFairs(req, res, next) {
  console.log('FETCHING FROM MODEL')
  db.any(`SELECT * FROM fairs;`)
    .then((fairs) => {
      console.log('THIS IS FROM THE MODEL ' + fairs)
      res.fairs = fairs;
      next();
    })
    .catch(error => next(error));
}

function getAllPosts(req, res, next) {
  db.any(`SELECT * FROM post;`)
    .then((posts) => {
      res.posts = posts;
      next();
    })
    .catch(error => next(error));
}

// function getAllFairs(req, res, next) {
//   console.log('FETCHING FROM MODEL')
//   db.any(`SELECT
//     fairs.title as fair_title,
//     fairs.description as fair_description,
//     fairs.fair_id as fair_id,
//     post.title as post_title,
//     post.description as post_description,
//     post.image_url as post_image
//    FROM fairs LEFT JOIN post ON fairs.fair_id = post.fair_id;`)
//     .then((fairs) => {
//       console.log('THIS IS FROM THE MODEL ' + fairs)
//       res.rows = fairs;
//       next();
//     })
//     .catch(error => next(error));
// }

function getOneFair (req, res, next) {
  const prod_id = req.params.id;

  const query = `SELECT * FROM post WHERE fair_id = $1;`;
  const values = [prod_id];

  db.oneOrNone(query, values)
  .then((product) => res.rows = product)
  .then(() => next())
  .catch(err => next(err));
}


module.exports = {
  getAllFairs,
  getAllPosts,
  getOneFair,
}
