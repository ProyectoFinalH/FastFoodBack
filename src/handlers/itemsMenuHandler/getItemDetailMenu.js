const { getItemDetailMenu } = require("../../controllers/itemsMenuController/getItemDetailMenu");

const getItemDetailMenuHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const response=await getItemDetailMenu(id);
        response
        ?res.status(200).json(response)
        :res.status(404).json("Este item del menu no existe");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getItemDetailMenuHandler
}