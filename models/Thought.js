const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new mongoose.Schema({
    thoughtText : { type : String, required : true, length: (1,280)},
    createdAt: {
        type: Date, 
        default: Date.now,
        get : (date)=> formater(date),
    },
    username : { type : String, required : true},
    reactions : [
        reactionSchema
    ]
},{
    toJSON : {
        virtuals : true
    }
}
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = mongoose.model('Thought',thoughtSchema);

module.exports = Thought;