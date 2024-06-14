const { createItemMenu } = require("../../controllers/itemsMenuController/createItemMenu");

const createItemMenuHandler = async (req, res) => {
    const { restaurant_id,menu_id, category_id, name, description, price} = req.body;



    let imageCloudinary;
    if (req.file) {
        imageCloudinary = req.file.path;
    }
 

    try {

        const response = await createItemMenu({ restaurant_id,menu_id, category_id, name, description, price, image_url:imageCloudinary});

        response === false
            ? res.status(400).json("Ya existe un item con ese nombre")
            : res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createItemMenuHandler
};

