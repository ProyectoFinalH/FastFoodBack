const db = require('../../db/knex');

const getAllComments = async () => {
  try {
    
    const comments=await db('comments')
    .leftJoin('users','comments.user_id','users.id')
    .leftJoin('restaurants','comments.restaurant_id','restaurants.id')
    .select('comments.id','restaurants.name as restaurant_name','users.username as user_name','users.image_url as user_image_url','comments.comment','comments.rating','comments.active','comments.created_at')
    .orderBy('comments.id','desc');
    return comments;



  } catch (error) {
    console.log(error);
    //throw new Error('Error fetching comments');
  }
};

module.exports = getAllComments;