const { Thought, User } = require('../models');
const thoughtData = require('./postData.json');
const userData = require('./userData.json');


db.once('open', async () => {
    await Thought.deleteMany({});
    const thought = await Thought.insertMany(thoughtData);
    console.log('Thought seeded!');

    await User.deleteMany({});
    const user = await User.insertMany(userData);
    console.log('Users seeded!');


    process.exit(0);
});