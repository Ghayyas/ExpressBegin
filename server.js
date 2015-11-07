/*var http = require('http');
http.createServer(function(req,res){
res.writeHead({
'Content-Type': 'text/plain'
});
  res.write('hellow World')
   res.end();
}).listen(3000);
console.log('server is Running at http://localhost:3000/')*/
/*var connect = require('connect'); 
var app = connect(); 
var helloWorld = function(req, res, next) { 
res.setHeader(
'Content-Type', 'text/plain'); 
res.end('Hello World'); }; 
app.use(helloWorld); 
app.listen(3000); 
console.log('Server running at http://localhost:3000/');*/
/*=================================================*/

//var connect = require('connect'); var app = connect(); var logger = function(req, res, next) { console.log(req.method, req.url); next(); }; var helloWorld = function(req, res, next) { res.setHeader('Content-Type', 'text/plain'); res.end('Hello World'); }; app.use(logger); app.use(helloWorld); app.listen(3000); console.log('Server running at http://localhost:3000/')


//var connect = require('connect'); var app = connect(); var logger = function(req, res, next) { console.log(req.method, req.url);
//next(); }; var helloWorld = function(req, res, next) { res.setHeader('Content-Type', 'text/plain'); res.end('Hello World'); }; var goodbyeWorld = function(req, res, next) { res.setHeader('Content-Type', 'text/plain'); res.end('Goodbye World'); }; app.use(logger); app.use('/hello', helloWorld); app.use('/goodbye', goodbyeWorld); app.listen(3000); console.log('Server running at http://localhost:3000/');
var express = require('express'); var app = express(); app.use('/', function(req, res) { res.send('Hello World'); }); app.listen(3000); console.log('Server running at http://localhost:3000/'); module.exports = app;