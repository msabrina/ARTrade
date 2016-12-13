// Code acquired from Rafa Pacas Puppies lab and chairShare App.

const bcrypt = require('bcrypt');
const auth = require('../lib/auth.js');
const jwt = require('jsonwebtoken');
const db = require('../db/db.js');



function logIn(req, res, next) {
  const loginData = {
    username: req.body.username,
    password: req.body.password,
  };
  console.log(loginData);
  db.any('SELECT * FROM users WHERE username = $1;', [loginData.username])
  .then(data => {
    let users = data;
    if (!(Array.isArray(data))) {
      users = [data];
    }
    users.forEach((user) => {
      const matches = bcrypt.compareSync(loginData.password, user.password);
      if (matches) {
        console.log(user);
        res.id = user.id;
        res.token = createToken(user.id);
        res.user = user;
        next();
      }
    })
    res.token = 'invalid';
    next();
  })
  .catch(error => console.log(error));
}

function getUserData (req, res, next) {
  const token = req.headers['token_authorization'] || req.body.token || req.params.token || req.query.token;
  auth.getUserData(token)
  .then((user) => {
    req.userInfo = user.data
    res.userData = user.data
  })
  .then(() => next())
  .catch(err => next(err));
}

function getUserPosts (req, res, next) {
  const values = [res.userInfo.user_id];
  const query = `SELECT * FROM post INNER JOIN user_post_ref ON user_post_ref.post_id = post.post_id WHERE user_post_ref.user_id = $1;`;
  // const query = `SELECT p.*, u.email, i.* FROM post p INNER JOIN user_post_ref ur ON ur.post_id = p.post_id INNER JOIN "user" u ON u.user_id = $1 INNER JOIN image_post_ref ir ON ir.post_id = p.post_id INNER JOIN image i ON i.image_id = ir.image_id WHERE u.user_id = $1;`;
  db.any(query, values)
  .then(posts => res.userPosts = posts)
  .then(() => next())
  .catch(err => next(err));
}
// verify user
// function authenticateUser(req, res, next) {
//   const token = req.body.token;
//   // console.log(req.body.token);
//   if (token) {
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     } catch(err) {
//       res.send(err);
//       next(err);
//     }
//     res.token = createToken(req.body.id);
//     next();
//   } else {
//     res.token = {
//       error: true,
//       message: 'Unauthenticated User',
//     };
//     next();
//   }
// }

function authenticateUser (req, res, next) {
  const token = req.headers['token_authorization'] || req.body.token || req.params.token || req.query.token;
  jwt.verify(token, SECRET, (err, decoded) => {
      if (err) return next(err);
      next();
  });
}

function createUser (req, res, next) {
  // get data
  const first = req.body.firstName;
  const last = req.body.lastName;
  const email = req.body.email.toLowerCase();
  const password = bcrypt.hashSync(req.body.password, SALTROUNDS);

  // validate data
  if (!(first || last || email || password)) next(new Error('Please check that all fields were filled out properly.'));
  if (!isValidEmail(email)) next(new Error('Please submit a valid email address.'));

  // build query
  const query = `INSERT INTO users (fname, lname, email, password) VALUES ($1, $2, $3, $4) RETURNING user_id, fname, lname, email;`;
  // prepare values array
  const values = [
    first,
    last,
    email,
    password,
  ];

  // execute query with the data...
  db.one(query, values)
  .then((data) => {
    // ...then get a token for the user and send it back to the caller
    auth.getUserToken(data)
      .then((token) => res.rows = token)
      .then(() => next())
      .catch(err => next(err));
  })
  /* end of db then; catch db errors now */
  .catch(err => next(err));
}

module.exports = {
  logIn,
  authenticateUser,
  getUserData,
  getUserPosts,
  createUser
};
