var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 5000;
app.get("/", function (req, res) {
    res.send("Express + TypeScript Server");
});
app.listen(port, function () { return console.log("Running on port ".concat(port)); });
