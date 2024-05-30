const db=require('../../db/knex');

const getUsers=async()=>{

    const infoDB=await db('users').select('*');
    return infoDB;

};

module.exports={
    getUsers
}