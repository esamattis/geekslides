
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain' });

  res.write('Hello\n');

  setTimeout(function() {
    res.end('World\n');
  }, 2000);


}).listen(9000, "127.0.0.1");

