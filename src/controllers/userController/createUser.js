
const { findOrCreate } = require('../../utils/findOrCreate');

const createUser=async({username,email,password})=>{

    const newUser={
        username:username,
        email:email,
        password:password,
        active:true
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