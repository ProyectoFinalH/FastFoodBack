const { createItemMenu } = require("../../controllers/itemsMenuController/createItemMenu");

const createItemMenuHandler = async (req, res) => {
    const { menu_id, category_id, name, description, price } = req.body;

    console.log(req.file);
    console.log(req.body);

    if (!req.file) {
        return res.status(400).json({ message: 'El archivo no fue subido' });
    }

    const imageUrl = req.file.path;

    try {
        const response = await createItemMenu({ menu_id, category_id, name, description, price, image_url: imageUrl });
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

