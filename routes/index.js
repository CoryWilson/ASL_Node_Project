var http = require('http');
var express = require('express');
var router = express.Router();
var url = require('url');


/* GET home page. */

router.get('/', function(req, res, next) {

  res.render('index',{title: 'Home | Mountain Reports',
                      classname: 'home'})

});

router.get('/mtn:mountainpage',function(req,res){

   res.render('index',{title: 'Mountain Info',
                       classname: 'mountain',
                       obj:req.params.mountainpage});

});


module.exports = router;

