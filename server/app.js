const express = require("express");
const postsRouter = require("./routes/posts.routes.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(postsRouter);



module.exports = app