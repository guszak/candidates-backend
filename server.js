require('dotenv').config()
var http = require("http");
var express = require('express');
var bodyParser = require('body-parser');
var evaluation = require('./routes/evaluation');

var app = express();
var port = normalizePort(process.env.PORT || 3000);

// Allow only POST requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Define routes 
app.post('/evaluation', evaluation.post);

app.listen(port);
console.log('Listening port ' + port);

/**
* @name: normalizePort;
* @description: Normalize a port into a number, string, or false;
* @author: Lucas Guszak;
* @date: 08/06/2017;
*/
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port))
    return val;

  if (port >= 0)
    return port;

  return false;
}