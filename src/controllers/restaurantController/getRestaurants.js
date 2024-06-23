const db=require('../../db/knex');

const getRestaurants=async()=>{

    const infoDB=await db('restaurants').where('active',true).orderBy('id','asc');;
    return infoDB;

};

module.exports={
    getRestaurants
}