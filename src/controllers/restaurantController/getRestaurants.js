const db=require('../../db/knex');

const getRestaurants=async()=>{

    const infoDB=await db('restaurants').where('active',true);
    return infoDB;

};

module.exports={
    getRestaurants
}