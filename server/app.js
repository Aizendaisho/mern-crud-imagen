const express = require("express");
const fileUpload = require("express-fileupload");
const postsRouter = require("./routes/posts.routes.js");
const app = express();
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(postsRouter);



module.exports = app