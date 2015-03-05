var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Break the ice',
                        classname: 'breaktheice.com'
                      });
});

router.get('/mountainpage',function(req,res){
   res.render('index',{title: 'Mountain Info',
                       classname: 'mountain'});

});


module.exports = router;
