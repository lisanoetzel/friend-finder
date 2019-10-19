var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function (){
    console.log("app is listening on PORT: " + PORT);
});