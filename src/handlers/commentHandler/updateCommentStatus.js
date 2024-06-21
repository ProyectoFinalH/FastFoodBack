const updateCommentStatus = require("../../controllers/commentController/updateCommentStatus");

const updateCommentStatusHandler = async (req, res) => {
  try {
    const response = await updateCommentStatus(req, res);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateCommentStatusHandler;
