const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {//specify route
    res.send('Hello World');//route handler
});

module.exports = router;