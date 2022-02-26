const router = require('express').Router();
const api = require('./api');

router.use('/api', api);
router.use((req, res) => {
    res.status(404).send('<h1>Wrong Route!</h1>');
});

module.exports = router;