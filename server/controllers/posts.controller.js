const Post = require("../models/posts.js");
const { imageUploader, deleteImage } = require("../libs/cloudinary.js");
const fsExtra = require("fs-extra");

const getPosts = async (req, res) => {
  try {
    const result = await Post.find();
    return res.send(result);
  } catch (error) {
    res.status(500).send(error);
  } 
};

const createPosts = async (req, res) => {
  let image;
  try {
    if (req.files.image) {
      const result = await imageUploader(req.files.image.tempFilePath);
      await fsExtra.remove(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }
    const newPost = await new Post({ ...req.body, image });
    await newPost.save();
    return res.status(201).send("se ha publicado su post");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const updatePosts = async (req, res) => {
  const { id } = req.params;
  try {
    const postUpdate = await Post.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    return res.status(201).send(postUpdate);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePosts = async (req, res) => {
  const { id } = req.params;
  try {
    const deletePost = await Post.findByIdAndDelete(id);

    if (!deletePost) return res.status(404).send("post no exist");

    if (deletePost.image.public_id) {
      await deleteImage(deletePost.image.public_id);
    }

    return res.status(204).send("se ha borrado su post");
  } catch (error) {
    res.status(404).send(error);
  }
};

const onePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById({ _id: id });
    if (!post) return res.status(404).send("post no exist");
    return res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getPosts, createPosts, updatePosts, deletePosts, onePost };
