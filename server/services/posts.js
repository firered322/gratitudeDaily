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
};

module.exports = services;
