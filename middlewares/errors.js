const errorHandler = (err, req, res, next) => {
  if (typeof err === "string")
    return res.status(400).send({ message: err });

  // Mainly used for Mongoose Validations
  if (err.name === "ValidationError")
    return res.status(400).send({ message: err.message });

  // JWT authentication error
  if (err.name === "UnauthorizedError")
    return res.status(401).send({ message: "Token not Valid" });
  if (err.name === "JsonWebTokenError")
    return res.status(401).send({ message: "jwt must be provided" })
  // default server Error 500
  return res.status(500).send({ message: err.message });

}

module.exports = {
  errorHandler
}
