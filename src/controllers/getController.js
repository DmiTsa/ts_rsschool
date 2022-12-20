"use strict";
exports.__esModule = true;
var users_js_1 = require("../data/users.js");
var getController = function (req, res) {
    switch (req.url) {
        case "/api/users":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(users_js_1["default"]);
            break;
        default:
            res.statusCode = 404;
            res.write("Error 404: Path: ".concat(req.url, " is not found"));
            res.end();
            break;
    }
};
exports["default"] = getController;
