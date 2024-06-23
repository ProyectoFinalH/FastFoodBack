const db=require('../../db/knex');

const getAllRestaurants=async()=>{

    const infoDB=await db('restaurants').select('*').orderBy('id','asc');;
    return infoDB;

};

module.exports={
    getAllRestaurants
}