const db = require("../../db/knex")

const loginGoogle=async()=>{

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

module.exports={loginGoogle}