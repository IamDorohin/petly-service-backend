const express = require("express");
const logger = require("morgan");
const cors = require("cors");
// transport names of variables to environment of variables
require("dotenv").config();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// crete server
const app = express();

// import of routes
const authRouter = require("./routes/api/auth");
const newsRouter = require("./routes/api/news");
const friendsRouter = require("./routes/api/our_friends");
const usersRouter = require("./routes/api/users");
const noticesRouter = require("./routes/api/notices");
const profileRouter = require('./routes/api/profile');


// way of getting info
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
// pass info to logger
app.use(logger(formatsLogger));
// use cors like middleawre in server work
app.use(cors());

// express.json() - transorm request from JSON to object and write it to req.body
app.use(express.json());

// create routes

app.use("/api/news", newsRouter);
app.use("/api/our_friends", friendsRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/notices", noticesRouter);
app.use('/api/profile', profileRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: message });
});

module.exports = app;
