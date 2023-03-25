// import server
const app = require("./app");
// import mongoose
const mongoose = require("mongoose");
// get value of DB_HOST from process.env
const { DB_HOST, PORT = 3000 } = process.env;

// connect to database + start server
mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
