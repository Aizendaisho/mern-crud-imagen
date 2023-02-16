const getPosts = (req, res) => {
  res.status(200).send("desde routes posts controllers");
};

const createPosts = (req, res) => {
  res.status(200).send("desde routes posts create controllers");
};

const updatePosts = (req, res) => {
  res.status(200).send("desde routes posts update controllers");
};

const deletePosts = (req, res) => {
  res.status(200).send("desde routes posts delete controllers");
};

const onePost = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`desde routes posts controllers tu id es ${id}`);
};

module.exports = { getPosts, createPosts, updatePosts, deletePosts, onePost };
