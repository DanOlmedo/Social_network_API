const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText : { type : String, required : true, length: (1,280)},
    createdAt: { type: Date, default: Date.now },
    username : { type : String, required : true},
    reactions : { type : Array}

});

const Thought = mongoose.model('Thought',thoughtSchema);

const handleError = (err) => console.error(err);

Thought.create(
    {
        thoughtText : 'Test thought text',
        username : 'TestThoughtUser',
        reactions : ['r1','r2'],
    },
    (err) => (err ? handleError(err) : console.log('Created new thought'))
);

module.exports = Thought;