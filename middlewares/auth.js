const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]

  if (token === null || token === undefined)
    return res.status(401).send({ message: "jwt must be provided" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

const generateAccessToken = (payload) =>
  jwt.sign({ data: payload }, JWT_SECRET, {
    expiresIn: "30m"
  })


module.exports = {
  authenticateToken,
  generateAccessToken
}
