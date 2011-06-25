var express = require("express");
var app = express.createServer();


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('slides.ejs');
});





app.listen(3000);
console.log("Listening on http://localhost:3000/");
