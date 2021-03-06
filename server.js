//Dependenices 
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');
var htmlroutes = require('./app/routing/htmlRoutes.js');
var apiroutes = require('./app/routing/apiRoutes.js');
// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

  // Routes
// =============================================================

app.use('/', htmlroutes);
app.use('/api', apiroutes);


// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});