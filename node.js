///**
// * Created by patrickhalton on 3/3/15.
// */
//var http = require('http');
//var myServer = http.createServer(function(request,response){
//    response.writeHead(200,{"Content-Type" : "text/html"});
//    response.write("<b>Hello</b> World");
//    response.end();
//});//create server

//myServer.listen(3000);
var express = require('express');
var app = express();
var routes = require('./routes');


app.set('view engine','ejs');

app.locals.pagetitle = "awesome website";

app.get('/',routes.index);
app.get('/about',routes.about);

var server = app.listen(3000,function(){
    console.log('listening 3000')
});


app.get('*',function(req,res){
   res.send('Bad Route');

});
