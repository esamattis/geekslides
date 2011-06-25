
var express = require("express");
var app = express.createServer();
var io = require('socket.io').listen(app);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('slides.ejs');
});

app.get('/manage', function(req, res){
  res.render('manage.ejs');
});



var lastSlideId = 1;

var slides = io.of("/slides");

io.of("/manage").on("connection", function(manageSocket) {
  manageSocket.on("changeto", function(slideId) {
    lastSlideId = slideId;
    slides.emit("changeto", slideId);
  });
});



slides.on("connection", function() {
  slides.emit("changeto", lastSlideId);
});



app.listen(3000);
console.log("Listening on http://localhost:3000/");
