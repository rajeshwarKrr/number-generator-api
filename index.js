const express = require("express");
const app = express();
const cors = require("cors")
require("dotenv").config();

const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");
const { PORT = 5000 } = process.env;
const auth = require("./middlewares/auth.js");
const errors = require("./middlewares/errors.js");
const unless = require("express-unless");

// connect to DB
mongoose
  .connect(dbConfig.db, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database Connected");
    },
    (error) => {
      console.log("Database Not connected", error);
    }
  );

// Skip middlewares conditionally
auth.authenticateToken.unless = unless;

// app.use("/api-docs-v1", swaggerUI.serve, swaggerUI.setup(specs));

app.use(
  auth.authenticateToken.unless({
    path: [
      { url: "/v1/auth/login", methods: ["POST"] },
      { url: "/v1/auth/register", methods: ["POST"] },
      { url: "/" },
    ],
  })
);

app.use(cors("*"));

// bodyparser
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Hello"))
app.use("/v1/auth", require("./v1/routes/auth.routes"));
app.use("/v1", require("./v1/routes/user.routes"));

// middleware for error responses
app.use(errors.errorHandler);

// connect with a Port
app.listen(PORT, () => {
  console.log("Connected to PORT: ", PORT);
});
