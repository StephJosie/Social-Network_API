const express = require('express');
const routes = require('./routes');
const db = require('./config/connection');
// const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(require('./routes'));
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}!`);
    });
});
