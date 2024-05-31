const { getDetailUser } = require("../../controllers/userController/getDetailUser");

const getDetailUserHandler=async(req,res)=>{

    const {id}=req.params;

    try {
        const user=await getDetailUser(id);
        user
        ?res.status(200).json(user)
        :res.status(400).json("Este usuario no existe");
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    

}

module.exports={
    getDetailUserHandler
}