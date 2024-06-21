const db = require('../../db/knex');

const updateCommentStatus = async (req, res) => {
  const { comment_id } = req.params;
  const { active } = req.body; // true para activar, false para desactivar

  try {
    const existingComment = await db('comments').where({ id: comment_id }).first();

    if (!existingComment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    const updatedComment = await db('comments')
      .where({ id: comment_id })
      .update({ active, updated_at: db.fn.now() })
      .returning('*');

    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: 'Error updating comment status' });
  }
};

module.exports = updateCommentStatus;
