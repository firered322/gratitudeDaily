const Posts = require("../models/postMessage");

const services = {
  getPosts: async function () {
    try {
      const posts = await Posts.find();
      return posts;
    } catch (error) {
      return error;
    }
  },

  createPost: async function (postBody) {
    const newPost = new Posts(postBody);
    try {
      const result = await newPost.save();
      return result;
    } catch (error) {
      return error;
    }
  },
};

module.exports = services;
