const Post = require("../models/posts.js");

const getPosts = async (req, res) => {
  try {
    const result = await Post.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createPosts = async (req, res) => {
  try {
    const newPost = await new Post(req.body);
    await newPost.save();
    res.status(201).send("se ha publicado su post");
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePosts = async (req, res) => {
  const { id } = req.params;
  try {
    const postUpdate = await Post.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).send(postUpdate);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePosts = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    res.send("se ha borrado su post");
  } catch (error) {
    res.status(500).send(error);
  }
};

const onePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById({ _id: id });
    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getPosts, createPosts, updatePosts, deletePosts, onePost };
