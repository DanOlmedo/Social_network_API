const router = require('express').Router();
const {
  getReactions,
  getSingleReaction,
  createReaction,
} = require('../../controllers/reactionController');

router.route('/').get(getReactions).post(createReaction);

router.route('/:userId').get(getSingleReaction);

module.exports = router;