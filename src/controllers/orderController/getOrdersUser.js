const db=require('../../db/knex');

const getOrdersUser=async(id)=>{

    const infoDB=await db('orders')
    .leftJoin('users','orders.user_id','users.id')
    .leftJoin('restaurants','orders.restaurant_id','restaurants.id')
    .leftJoin('statusorder','orders.statusorder_id','statusorder.id')
    .select('orders.id','users.username as user_name','restaurants.name as restaurant_name',
        'orders.items','orders.total_price','orders.order_date','statusorder.name as status_order','orders.active'
    )
    .where('orders.user_id',id)
    .andWhere('orders.active',true)
    .orderBy('id','desc');
    return infoDB;

};

module.exports={
    getOrdersUser
}