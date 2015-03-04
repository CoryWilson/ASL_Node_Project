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

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('default',{
        title: 'Home',
        users: ['Ray','Pat','Jon']

    })

});

var server = app.listen(3000,function(){
    console.log('listening 3000')
});

app.get('/me',function(req,res){
    res.send('send route');
});


app.get('/who/:name?',function(req,res){
    var name = req.params.name;//storing the url parameter into a local variable to the called by req
    res.send(name + ' was here');
});

app.get('/who/:name?/:title?',function(req,res){
    var name = req.params.name;
    var title = req.params.title;
    res.send('<p>name:' + name + '<br>title: ' + title +'</p>');

});

app.get('*',function(req,res){
   res.send('Bad Route');

});
