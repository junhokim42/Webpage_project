var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request, response){
    var url = request.url;
    if (http.request.url == '/'){
        url = '/index.html';
    }
    if (http.request.url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});

app.listen(8000);