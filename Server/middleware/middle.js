const jwt = require("jsonwebtoken");

async function auth(req, res, next) {
  try {
    const  secret = process.env.JWT_SECRET;
    const token = req.header('x-auth-token')
    jwt.verify(token, secret, (err, user) => {
      req.user = user;
      next();
      console.log(req.user,45)
    });
  } catch (e) {
    res.status(403).json({ message: "user is not authenticated" });
  }
}


const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.parms.id || req.user.role) {
      next();
    } else {
      res.status(403).json("You are not allowed");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if ((req.user.usertype=="admin"||req.user.usertype=="ADMIN")) {
      next();
    } else {
      res.status(403).json("You are not allowed");
    }
  });
};



module.exports = {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  auth
};