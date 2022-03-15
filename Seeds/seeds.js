const { Thought, User } = require('../models');
const thoughtData = require('./thoughtData.json');
const userData = require('./userData.json');
const db = require("../config/connection")

db.once('open', async () => {
    await Thought.deleteMany({});
    const thought = await Thought.insertMany(thoughtData);
    console.log('Thought seeded!');

    await User.deleteMany({});
    const user = await User.insertMany(userData);
    console.log('Users seeded!');


    process.exit(0);
});