const Post = require('../../models/Post');

module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    },
  },
};
