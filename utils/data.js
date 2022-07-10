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

const users = [];

for (let i = 0; i < userNames.length; i++) {
    users.push(userNames[i]);
    users.push(emails[i]);
    users.push(thoughts[i]);
};

module.exports = users;