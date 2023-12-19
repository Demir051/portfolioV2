var express = require('express');
var router = express.Router();

require('dotenv').config();


router.get('/', function(req, res, next) {
  res.render('index', {GITHUB_TOKEN: process.env.GITHUB_TOKEN });
});

module.exports = router;
