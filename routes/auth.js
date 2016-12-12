const router = require('express').Router();
const { LogIn,
        authenticateUser,
        createUser,
        getUserPosts,
        getUserData,
        deleteUser
      } = require('../models/auth');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/login')
  // .post(LogIn, sendAsJSON);

router.route('/')
  .get(authenticateUser, getUserData, getUserPosts, sendAsJSON)
  .post(createUser, sendAsJSON)
  // .put(authenticateUser, getUserData, updateUser, sendAsJSON)
  // .delete(authenticateUser, deleteUser, sendAsJSON);

module.exports = router;
