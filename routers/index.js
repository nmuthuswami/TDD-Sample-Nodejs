/* This class holds routing for home page */
const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.json({text: 'Hi this is welcome home page'});
});

module.exports = router;