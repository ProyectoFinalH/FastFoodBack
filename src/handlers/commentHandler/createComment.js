const createComment = require('../../controllers/commentController/createComment');

const createCommentHandler = async (req, res) => {
  try {
    await createComment(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createCommentHandler;

