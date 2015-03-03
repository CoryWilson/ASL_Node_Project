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

app.get('/',function(req,res){
    res.send('<h1>hello</h1> express');
});

var server = app.listen(3000,function(){
    console.log('listening 3000')
});

app.get('/me',function(req,res){
    res.send('send route');
});

