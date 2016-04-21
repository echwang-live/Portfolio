var express = require('express');
var path = require('path');
var app = express();

// Static content
app.use(express.static(path.join(__dirname, './client/static')));

// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(7000, function() {
	console.log("__dirname = ", __dirname);
  console.log("listening on port 7000");
})