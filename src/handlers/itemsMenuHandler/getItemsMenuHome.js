const { getItemsMenuHome } = require("../../controllers/itemsMenuController/getItemsMenuHome");

const getItemsMenuHomeHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const itemsMenu=await getItemsMenuHome(id);
        itemsMenu.length
        ?res.status(200).json(itemsMenu)
        :res.status(400).json("No hay items registrados");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getItemsMenuHomeHandler
}