const { getAllMenus } = require("../../controllers/menuController/getAllMenus");


const getAllMenusHandler=async(req,res)=>{

    try {
        const menus=await getAllMenus();
        menus.length
        ?res.status(200).json(menus)
        :res.status(400).json("No hay menus registrados");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getAllMenusHandler
}