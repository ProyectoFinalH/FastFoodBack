const db = require("../../db/knex")

const loginUser=async({email,password})=>{

    const infoDB=await db('users').where({email:email}).first();
    if(infoDB){
        if(infoDB.password===password){
            return true;
        }
    }
    else{
        return false;
    }
    


}

module.exports={loginUser}