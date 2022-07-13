const router = require('express').Router();
const {
  getReactions,
  getSingleReaction,
  createReaction,
  deleteReaction,
} = require('../../controllers/reactionController');

router.route('/').get(getReactions).post(createReaction);

router.route('/:userId').get(getSingleReaction);

router.route('/:userId').delete(deleteReaction);

module.exports = router;