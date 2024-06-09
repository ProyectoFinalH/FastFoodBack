const db=require('../../db/knex');

const createOrder=async({user_id,restaurant_id,total_price})=>{

    const newOrder={
        user_id:user_id,
        restaurant_id:restaurant_id,
        total_price,
        active:true
    }
    
    const [id] = await db('orders').insert(newOrder).returning('id');
        record = await db('orders').where( id ).first();

    if(record){
        return record;
    }else{
        return false;
    }
    

};

module.exports={
    createOrder
}