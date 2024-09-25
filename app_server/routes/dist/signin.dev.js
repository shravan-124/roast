"use strict";

// app_server/routes/signin.js
var express = require('express');

var router = express.Router(); // GET Sign In page

router.get('/', function (req, res, next) {
  res.render('signin', {
    title: 'Sign In'
  });
});
module.exports = router;