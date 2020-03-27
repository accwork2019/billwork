
//include node modules
var express = require('express')
var path 		= require('path');
global.session = require('express-session');	
global.flash = require('req-flash');
global.cookieParser = require('cookie-parser');

//include config
global.dbConfig = require('./config/db-config');


//include core class 
global.dbObject = require('./core/db-class');

// //dbObject.connect();

// //routing to controller
var app = require('./config/router.js');

// // Access public folder from root
 app.use('/public', express.static('public'));

// //For set layouts of html view
 var expressLayouts = require('./node_modules/express-ejs-layouts'); 
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs'); //installed
 app.use(expressLayouts);

app.listen(3000);