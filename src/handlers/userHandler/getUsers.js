const { getUsers } = require("../../controllers/userController/getUsers");

const getUsersHandler=async(req,res)=>{

    try {
        const users=await getUsers();
        users.length
        ?res.status(200).json(users)
        :res.status(404).json("No hay usuarios registrados");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getUsersHandler
}