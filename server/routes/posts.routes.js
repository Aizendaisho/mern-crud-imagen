const express = require("express");
const postsController = require("../controllers/posts.controller.js");

const router = express.Router();

router.get("/posts", postsController.getPosts);

router.post("/posts", postsController.createPosts);

router.put("/posts", postsController.updatePosts);

router.delete("/posts", postsController.deletePosts);

router.get("/posts/:id", postsController.onePost);

module.exports = router;
