"use strict";
exports.__esModule = true;
var http_1 = require("http");
var port = 5000;
var server = (0, http_1.createServer)(function (request, response) {
    response.end('Hello world!');
});
server.listen(port, function () {
    console.log("Server running at port: ".concat(port));
});
