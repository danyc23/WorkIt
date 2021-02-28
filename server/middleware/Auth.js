require("dotenv").config();

const jwt = require("jsonwebtoken");

const { ACCESS_TOKEN_SECRET } = process.env;

function authenticate(req, res, next) {
  // auth header
  const { authorization } = req.headers;
  if (authorization) {
    // Authorization: Bearer token
    const token = authorization.split(" ")[1]; // grabs the token and not Bearer from string
    jwt.verify(token, ACCESS_TOKEN_SECRET, (error, decodedToken) => {
      if (error) {
        return res.status(401).json("Auth error");
      } else {
        req.decoded = decodedToken; // attach decodedToken to req object
        next(); // go onto next middleWare if any
      }
    });
  } else {
    res.status(403).json("No token provided");
  }
  next();
}

module.exports = {
  authenticate,
};
