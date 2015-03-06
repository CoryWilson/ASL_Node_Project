var http = require('http');
var express = require('express');
var router = express.Router();
var url = require('url');


router.get('/', function(req, res, next) {

  res.render('index',{title: 'Home | Mountain Reports',
                      classname: 'home'})

});

router.get('/mtn',function(req,res){

   res.render('index',{title: 'Mountain Info',
                       classname: 'mountain'
                       });

});


module.exports = router;

