const getUsersHandler=(req,res)=>{
    res.status(200).send("aqui estan los users");

}

module.exports={
    getUsersHandler
}