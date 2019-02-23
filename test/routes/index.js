var express = require('express');
var router = express.Router();

var {
    find
} = require("../libs/mongo.js");



/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/findUser', async (req, res, next) => {
    let {
        id:id
    } = req.body
    let data = await find(`k1`, id ? {
        id
    } : {})
    res.send(data);
});

module.exports = router;