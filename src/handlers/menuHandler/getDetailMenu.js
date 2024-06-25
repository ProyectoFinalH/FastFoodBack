const { getDetailMenu } = require("../../controllers/menuController/getDetailMenu");

const getDetailMenuHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const menu=await getDetailMenu(id);
        menu
        ?res.status(200).json(menu)
        :res.status(404).json("Este menu no existe");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getDetailMenuHandler
}