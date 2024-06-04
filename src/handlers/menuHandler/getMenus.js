const { getMenus } = require("../../controllers/menuController/getMenus");

const getMenusHandler=async(req,res)=>{

    try {
        const menus=await getMenus();
        menus.length
        ?res.status(200).json(menus)
        :res.status(400).json("No hay menus registrados");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getMenusHandler
}