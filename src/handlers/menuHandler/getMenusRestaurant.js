const { getMenusRestaurant } = require("../../controllers/menuController/getMenusRestaurant");

const getMenusRestaurantHandler=async(req,res)=>{

    const {id}=req.params;
    try {
        const menus=await getMenusRestaurant(id);
        menus.length
        ?res.status(200).json(menus)
        :res.status(400).json("No hay menus registrados");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getMenusRestaurantHandler
}