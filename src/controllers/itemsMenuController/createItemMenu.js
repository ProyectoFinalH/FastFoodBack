const { findOrCreate } = require("../../utils/findOrCreate");

const createItemMenu = async ({ restaurant_id,menu_id, category_id, name, description, price, image_url }) => {
   
    const newItemMenu={
        restaurant_id:restaurant_id,
        menu_id:menu_id,
        category_id:category_id,
        name:name,
        description:description,
        price:price,
        image_url:image_url,
        active:true
    }
    const nameNewItemMenu={
        name:name
    }

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
