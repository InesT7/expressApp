var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send('Here i');
});


module.exports = router;
