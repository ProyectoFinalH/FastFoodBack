const { getItemsMenuRestaurant } = require("../../controllers/itemsMenuController/getItemsMenuRestaurant");


const getItemsMenuRestaurantHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const itemsMenu=await getItemsMenuRestaurant(id);
        itemsMenu.length
        ?res.status(200).json(itemsMenu)
        :res.status(404).json("No hay items registrados");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getItemsMenuRestaurantHandler
}