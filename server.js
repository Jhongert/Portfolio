// Express
var express = require("express");
var app = express();

var path = require('path');
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Handlebars
// var exphbs = require("express-handlebars");

// Helper to format the price with 2 decimals
// var hbs = exphbs.create({
// 	helpers: {
// 		formatPrice: function(price) {
//   			price = price.toFixed(2);
//   			return price;
//   		}
//   	},
//   	defaultLayout: 'main'
// });
// app.engine('handlebars', hbs.engine);
// app.set("view engine", "handlebars");


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res){
    res.send('index.html');
})
// Router
//app.use('/', product);

// Handle 404
// app.use(function(req, res) {
// 	res.render('404');
// });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
