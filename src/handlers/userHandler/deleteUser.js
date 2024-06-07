const { deleteUser } = require("../../controllers/userController/deleteUser");

const deleteUserHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        
        const response=await deleteUser({id});
        response===false
        ?res.status(400).json("No se encontro este usuario o no fue posible borrarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    deleteUserHandler
}