// Basic basic basic barebones for app - do more work!

var express = require('express');
var app = express();
var server = app.listen(8080);
var io = require('socket.io').listen(server);
var roomCollection = new Array();
roomCollection = ['test'];
var contains = function(arrayName, valueName) {
	for (var i = 0; i < arrayName.length; i++) {
		if(arrayName[i] === valueName) {
			return true;
		}
	}
	return false;
}


app.get('/', function (req, res) {
  res.sendfile("public/index.html");
});

app.get('/create', function (req, res) {
	res.sendfile("public/create.html");
});

app.get('/create/new', function (req, res) {
	//res.send(req.query.RoomName + '<br />' + req.query.public);

	if (!req.query.RoomName) {
		res.send("Select a Room Name!");
	} else if (!req.query.public) {
		res.send("Choose if you want a Public room!");
	} else if (!req.query.RoomName && !req.query.public) {
		res.send("Choose a Room Name and if you want it to be public");
	};

	// Check if the Room name is in use
	contains(roomCollection, req.query.RoomName);

});

// Handle rooms for multiple slideshow, use socketio rooms + maybe a database

app.get('/room/:id?', function(req, res) {
	if (req.params.id) {
		res.send("Welcome to Room: " + req.params.id);
	} else {
		res.send("Please enter a Room number/name or search here!");
	}
});

