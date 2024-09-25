"use strict";

var express = require('express');

var router = express.Router(); // Render Sign In page

router.get('/signin', function (req, res) {
  res.render('signin', {
    title: 'Sign In'
  });
}); // Handle Sign In

router.post('/signin', function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password; // Authentication logic goes here

  res.redirect('/'); // Redirect to home after signing in
});
module.exports = router;