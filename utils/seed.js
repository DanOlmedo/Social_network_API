const connection = require('../config/connection');
const { User, Reaction, Thought } = require('../models');
const users = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    // await Thought.deleteMany({});
    // await Reaction.deleteMany({});
    
    await User.collection.insertMany(users);
    // await Thought.collection.insertMany(thoughts);
    // await Reaction.collection.insertMany(reactions);
  
    console.table(users);
    // console.table(thoughts);
    // console.table(reactions);
    console.info('Seeding complete');
    process.exit(0);
  });
  