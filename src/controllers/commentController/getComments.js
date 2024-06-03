const db=require('../../db/knex');

const getComments=async()=>{

    const infoDB=await db('comments').select('*');
    return infoDB;

};

module.exports={
    getComments
}