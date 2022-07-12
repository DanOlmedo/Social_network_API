const users = [
    {'Username' : 'User1', 'Email' : 'user1@test.com', 'Thought' : 'thought 1'},
    {'Username' : 'User2', 'Email' : 'user2@test.com', 'Thought' : 'thought 2'},
    {'Username' : 'User3', 'Email' : 'user3@test.com', 'Thought' : 'thought 3'},
    {'Username' : 'User4', 'Email' : 'user4@test.com', 'Thought' : 'thought 4'},
    {'Username' : 'User5', 'Email' : 'user5@test.com', 'Thought' : 'thought 5'},
]

const params = [
    'Username',
    'Email',
    'Thought'
]

const userNames = [
    'User1',
    'User2',
    'User3',
    'User4',
    'User5',
];

const emails = [
    'user1@test.com',
    'user2@test.com',
    'user3@test.com',
    'user4@test.com',
    'user5@test.com',
];

const thoughts = [
    'thought 1',
    'thought 2',
    'thought 3',
    'thought 4',
    'thought 5',
];

// const entries = new Map([
//     userNames,
//     emails,
//     thoughts
// ]);

// const users = Object.fromEntries(entries);

// for (let i = 0; i < userNames.length; i++) {
//     users.push(userNames[i]);
//     users.push(emails[i]);
//     users.push(thoughts[i]);
// };

// const users = {};

//     params.forEach((element,index) => {
//     users[element] = userNames[index], emails[index], thoughts[index]
// })

module.exports = { users };