var http = require('http');

var todayVisited = 0;

http.createServer(function(request, response) {
  console.log("request ", request.url);

  if(request.url.startsWith("/counter")) {
    todayVisited += 1;
    response.writeHead(200, { "Content-Type" : "application/json" });
    response.end(JSON.stringify({todayVisited}), "utf-8");
  } else {
    response.writeHead(200, { "Content-Type" : "text/plain" });
    response.end(`Hello! You've requested with url ${request.url}!`, "utf-8");
  }
}).listen(8125);
console.log("Server running at http://127.0.0.1:8125/");