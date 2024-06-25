const { getMenusHome } = require("../../controllers/menuController/getMenusHome");


const getMenusHomeHandler=async(req,res)=>{

    const {id}=req.params;
    try {
        const menus=await getMenusHome(id);
        menus.length
        ?res.status(200).json(menus)
        :res.status(404).json("No hay menus registrados");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getMenusHomeHandler
}