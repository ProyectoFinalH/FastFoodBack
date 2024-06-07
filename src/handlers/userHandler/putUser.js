const { putUser } = require("../../controllers/userController/putUser");

const putUserHandler=async(req,res)=>{

    const {id}=req.params;
    const {username,email,password}=req.body;

    try {
        
        const response=await putUser({id,username,email,password});
        response===false
        ?res.status(400).json("Ya existe un usuario con este correo o hubo un error al actualizarlo")
        :res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    putUserHandler
}