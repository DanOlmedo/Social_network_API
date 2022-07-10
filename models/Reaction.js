const { ObjectID } = require('bson');
const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId : { type : ObjectID },
    reactionBody: { type : String, required : true, length : (1,280) },
    username : { type: String, required : true},
    createdAt: { type: Date, default: Date.now },
});

const Reaction = mongoose.model('Reaction', reactionSchema);

const handleError = (err) => console.error(err);

Reaction.create(
    {
       reactionBody : 'Reaction test text',
       username : 'TestReactionUser' 
    },
    (err) => (err ? handleError(err) : console.log('Created new reaction'))
);

module.exports = Reaction;