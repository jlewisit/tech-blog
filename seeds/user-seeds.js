const { User } = reqire('../models');

const userData = [
    {
        username: 'Joe1',
        password: 'password1'
    },
    {
        username: 'Joe2',
        password: 'password2' 
    },
    {
        username: 'Joe3',
        password: 'password3'
    },
    {
        username: 'Joe4',
        password: 'password4' 
    },
    {
        username: 'Joe5',
        password: 'password5' 
    },
    {
        username: 'Joe6',
        password: 'password6' 
    },
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;