const express = require("express");
const { createPosts, getPosts, updatePosts, deletePosts, onePost } = require("../controllers/posts.controller.js");

const router = express.Router();

router.get("/posts", getPosts); 

router.post("/posts", createPosts);

router.put("/posts/:id", updatePosts);

router.delete("/posts/:id", deletePosts);

router.get("/posts/:id", onePost);

module.exports = router;
