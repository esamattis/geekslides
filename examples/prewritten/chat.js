
var net = require('net');

var connections = [];

var server = net.createServer(function (c) {
  connections.push(c);
  c.on("data", function(data) {
      connections.forEach(function(other) {
        other.write(data.toString());
      });
  });
});


server.listen(9000);

