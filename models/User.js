const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    username : { type: String, required : true, unique : true, trimmed : true},
    email : { type : String, required : true, unique : true},
    thoughts : { type : Array},
    friends : { type : Array},
    lastAccessed: { type: Date, default: Date.now },
})

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

User.create(
    {
        username: 'TestUser',
        email: 'user@test.com',
        thoughts : ['one','two'],
        friends : ['f1','f2']
    },
(err) => (err ? handleError(err) : console.log('Created new user'))
);

module.exports = User;