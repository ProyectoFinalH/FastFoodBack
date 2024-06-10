const { findOrCreate } = require("../../utils/findOrCreate");

const createItemMenu = async ({ menu_id, category_id, name, description, price, image_url }) => {
    const newItemMenu = {
        menu_id: menu_id,
        category_id: category_id,
        name: name,
        description: description,
        price: price,
        image_url: image_url
    };
    const nameNewItemMenu = {
        name: name
    };

    const { record, created } = await findOrCreate('menuitems', nameNewItemMenu, newItemMenu);

    if (created) {
        return record;
    } else {
        return false;
    }
};

module.exports = {
    createItemMenu
};
