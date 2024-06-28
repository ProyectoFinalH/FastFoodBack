const getAllComments = require("../../controllers/commentController/getAllComments");

const getAllCommentsHandler = async (req, res) => {
    
  
    try {
      const response = await getAllComments();
      response.length
        ? res.status(200).json(response)
        : res.status(404).json("No hay comentarios registrados");
    } catch (error) {
      res.status(400).json({ error: error.message });
      console.log(error);
    }
  };
  
  module.exports = {
    getAllCommentsHandler
  };