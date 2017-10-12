var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end("<html><body><h1>Servidor subiu!</h1></body></html>")
});
server.listen(3000);
console.log('servidor está rodando');