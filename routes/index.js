var http = require('http');
var request = require('request');
var express = require('express');
var router = express.Router();
var url = require('url');
var request = require('request');


router.get('/mountain',function(req,res){
	var plAPI = 'http://api.powderlin.es/station/791:WA:SNTL?start_date=2013-01-15&end_date=2013-01-15';
   	request(plAPI, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    var parsedJSON = JSON.parse(body); // Show the HTML for the Google homepage. 
		  	// console.log(parsedJSON.station_information.elevation);
		  	// console.log(parsedJSON.station_information.name);
		  	res.render('mountain',{title: 'Mountain Info',
                       classname: 'mountain',
                       page: 'mountain',
                       name: parsedJSON.station_information.name,
                       
                   	});
		  }
	});
   	

});

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index',{title: 'Home | Mountain Reports',
                      classname: 'home',
                      page: 'home'})

});

router.get('/loginForm',function(req,res){

   res.render('login',{title: 'Mountain Info',
                       classname: 'search',
                       page: 'login'});

});

router.post('/processLogin',function(req,res){
   res.render('index',{title: 'Index',
                       classname: 'loggedIn',
                       page: 'loggedIn'
                   	   // username: req.body.usersname,
                   	   // password: req.body.password
                   	});

});


module.exports = router;

