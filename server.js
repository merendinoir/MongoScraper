var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

var express = require("express");
var app = express();


app.use(logger("dev"));
app.use (
    bodyParser.urlencoded({
        extended: false
    })
);

// path to public folder
app.use(express.static(process.cwd() + "/public"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// mongoDB connection
mongoose.connect("mongodb://localhost/mongo_scraper");
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});

// mongoose exercise 20 copy that info

var port = process.env.PORT || 3000;
app.listen(port, function (){
    console.log("listening on PORT " + port);
});
