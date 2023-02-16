const express = require("express");
const postsRouter = require("../routes/posts.routes.js");
const dbConect = require("../db/db.js");
const { PORT } = require("../config.js");
const mongoose = require("mongoose");
const morgan = require("morgan");
mongoose.set("strictQuery", false);

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(postsRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  dbConect();
});
