var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World, my name is Ian Benton');
    res.end();
}).listen(8001);