const db = require('../db/db.js');
const jwt = require('jsonwebtoken');


function getAllFairs(req, res, next) {
  console.log('FETCHING FROM MODEL')
  db.any('SELECT * FROM fairs;')
    .then((fairs) => {
      console.log('THIS IS FROM THE MODEL ' + fairs)
      res.rows = fairs;
      next();
    })
    .catch(error => next(error));
}

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
  getOneFair
}
