const { getItemsMenu } = require("../../controllers/itemsMenuController/getItemsMenu");

const getItemsMenuHandler=async(req,res)=>{

    try {
        const itemsMenu=await getItemsMenu();
        itemsMenu.length
        ?res.status(200).json(itemsMenu)
        :res.status(404).json("No hay items registrados");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getItemsMenuHandler
}