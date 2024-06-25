const { getAllUsers } = require("../../controllers/userController/getAllUsers");


const getAllUsersHandler=async(req,res)=>{

    try {
        const users=await getAllUsers();
        users.length
        ?res.status(200).json(users)
        :res.status(404).json("No hay usuarios registrados");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getAllUsersHandler
}