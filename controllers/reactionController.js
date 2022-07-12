const reactionSchema = require('../models/Reaction');

module.exports = {
    getReactions(req, res) {
      reactionSchema.find()
        .then((reactions) => res.json(reactions))
        .catch((err) => res.status(500).json(err));
    },
    getSingleReaction(req, res) {
      reactionSchema.findOne({ _id: req.params.reactionId })
        .select('-__v')
        .then((reaction) =>
          !reaction
            ? res.status(404).json({ message: 'No reactions with that ID' })
            : res.json(reaction)
        )
        .catch((err) => res.status(500).json(err));
    },
    createReaction(req, res) {
      reactionSchema.create(req.body)
        .then((dbReactionData) => res.json(dbReactionData))
        .catch((err) => res.status(500).json(err));
    },
    deleteReaction(req,res) {
      reactionSchema.findOneAndDelete(
        { reactionId : req.params.reactionId},
        (err, result) => {
          if (result) {
            res.status(200).json(result);
            console.log(`Deleted: ${result}`);
          } else {
            console.log('Uh Oh, something went wrong');
            res.status(500).json({ error: 'Something went wrong' });
          }
        }
      )
    }
  };