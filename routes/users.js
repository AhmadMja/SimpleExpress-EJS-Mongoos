var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in user file');
});

router.post( '/register' ,function(req, res , next){
  console.log(req.param('text_input_name'));
  console.log(req.param('text_input_password'));
  res.redirect('/');
  res.end();
});

module.exports = router;
