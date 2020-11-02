const postServices = require("../services/posts");

exports.getPosts = async (req, res) => {
  const response = {
    success: 0,
    data: "",
  };
  try {
    const posts = await postServices.getPosts();
    response.success = 1;
    response.data = posts;
    res.status(200).send(response);
  } catch (error) {
    response.data = error;
    res.status(401).send(response);
  }
};

exports.createPost = (req, res) => {
  res.send("Post creation");
};
