const db=require('../../db/knex');
const { findOrCreate } = require('../../utils/findOrdCreate');

const createUser=async({username,email,password})=>{

    const newUser={
        username:username,
        email:email,
        password:password
    }
    const emailNewUser={
        email:email
    }

    const {record,created}=await findOrCreate('users',emailNewUser,newUser)

    if(created){
        return record;
    }else{
        return false;
    }
    

};

module.exports={
    createUser
}