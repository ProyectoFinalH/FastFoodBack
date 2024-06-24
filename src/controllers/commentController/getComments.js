const db = require('../../db/knex');

const getComments = async ({ restaurant_id }) => {
  try {
    // const comments = await db('comments')
    //   .select('comments.*', 'users.username', 'orders.order_number')
    //   .leftJoin('users', 'comments.user_id', 'users.id')
    //   .leftJoin('orders', 'comments.order_id', 'orders.id')
    //   .where({ 'comments.restaurant_id': restaurant_id })
    //   .orderBy('comments.created_at', 'desc');

    // return comments;

    const comments=await db('comments')
    .leftJoin('users','comments.user_id','users.id')
    .select('comments.id','users.username as user_name','comments.comment','comments.rating','comments.active','comments.created_at')
    .where('comments.restaurant_id',restaurant_id)
    .orderBy('id','desc');
    return comments;



  } catch (error) {
    throw new Error('Error fetching comments');
  }
};

module.exports = getComments;
