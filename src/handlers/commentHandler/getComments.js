const  getComments  = require("../../controllers/commentController/getComments");

const getCommentsHandler = async (req, res) => {
  const { restaurant_id } = req.params;

  try {
    const response = await getComments({ restaurant_id });
    response.length
      ? res.status(200).json(response)
      : res.status(400).json("No hay comentarios registrados");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCommentsHandler
};
