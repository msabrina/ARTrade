//Code acquired from Rafa Pacas

const jwt = require('jsonwebtoken');

function createToken(Payload) {
  // get private key from .env
  const key = process.env.JWT_SECRET;
  // sign a new encrypted token that expires in 24h
  console.log(Payload);
  const newToken = jwt.sign(Payload, key);
  // return a new json token
  console.log(newToken);
  return newToken;
}

module.exports = {
  createToken,
};
