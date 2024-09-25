"use strict";

// app_server/routes/review.js
var express = require('express');

var router = express.Router(); // GET Review page

router.get('/', function (req, res, next) {
  res.render('review', {
    title: 'Reviews'
  });
});
module.exports = router;