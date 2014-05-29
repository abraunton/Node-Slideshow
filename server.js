// Basic basic basic barebones for app - do more work!

var express = require('express');
var app = express();
var server = app.listen(8080);
var io = require('socket.io').listen(server);

app.get('/', function (req, res) {
  res.send("Hello");
});

// Handle rooms for multiple slideshow, use socketio rooms + maybe a database

app.get('/room/:id?', function(req, res) {
	if (req.params.id) {
		res.send("Welcome to Room: " + req.params.id);
	} else {
		res.send("Please enter a Room number/name or search here!");
	}
});

