var express = require("express");
var app = express();
const engine = require('hbs');
const path = require('path');


// view engine setup
app.set('view engine', 'html');
app.engine('html', engine.__express);
app.set('views', path.join(__dirname, 'views'));


// set public assests directory
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


// landing page
app.get("/", (req, res) => {
    res.render("index");
});

//triggered whenever any URL other than the ones above is requested
//must be at the end
app.get("*", (req, res) => {
    res.send("Where are you going?");
});


//open app on http://localhost:3000
app.listen( 3000, () => {
    console.log("Server is running on port 3000");
})
