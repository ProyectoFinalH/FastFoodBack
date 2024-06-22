const db=require('../../db/knex');

const createOrder=async({restaurant_id,user_id,total_price,items})=>{

    const newOrder={
        restaurant_id:restaurant_id,
        user_id:user_id,
        total_price:total_price,
        items:JSON.stringify(items),
        //items:items, // esto cambiar cuando el front manda dato ya despues de stringify
        statusorder_id:1,
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