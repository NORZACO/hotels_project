const express = require('express');

const router = express.Router();

/* GET users listing. */
// eslint-disable-next-line no-unused-vars, func-names
router.get('/', function(_req, res, _next) {
  res.send('respond with a resource');
});

module.exports = router;
