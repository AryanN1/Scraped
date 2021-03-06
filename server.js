// Require our dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// Set up our port to be 3K
var PORT = process.env.PORT || 3000;

// Express App
var app = express();

// Express Router
var router = express.Router();


require("./config/routes")(router);


app.use(express.static(__dirname + "/public"));


app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");


app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(router);


var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";


mongoose.connect(db, function(error) {
  
  if (error) {
    console.log(error);
  }
  
  else {
    console.log("mongoose connection is successful");
  }
});

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});
