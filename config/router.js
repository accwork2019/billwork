var express = require('express')
var bodyParser = require('body-parser');
global.dateFormat = require('dateformat');

var app = express();

// init sessions 
app.use(session({
  secret: 'ACPANEL',
  saveUninitialized: true,
  resave: true,
  cookie: {
      path: "/",
  }
}));

app.use(cookieParser())
app.use(flash())

// middleware function to check for logged-in users
var sessionValidationChecker = (req, res, next) => {
  console.log(req.originalUrl);
  if (req.session.accountId && req.originalUrl =='/') {
    res.redirect('/dashboard');
  } else {      
    next();      
  }    
};

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//User
var userController = require("../controllers/userController");
app.get('/', sessionValidationChecker, userController.login);
app.post('/user/login-auth', userController.login_auth);
app.get('/user/logout', userController.logout);
app.get('/user/profile-edit', sessionValidationChecker, userController.profile_edit);
app.get('/user/profile-settings', sessionValidationChecker, userController.profile_settings);
app.get('/user/message', sessionValidationChecker, userController.message);

//Dashboard
var dashboardController = require("../controllers/dashboardController");
app.get('/dashboard/', dashboardController.dashboard);

//Master Pages
//-- Customer
var masterController = require("../controllers/masterController");
app.get('/master/list-customer', masterController.list_customer);
app.post('/master/list-customer-ajax', masterController.list_customer_ajax);

app.get('/master/add-customer', masterController.add_customer);
app.get('/master/edit-customer/:id', masterController.edit_customer);
app.post('/master/add-customer-save', masterController.add_customer_save);
app.post('/master/edit-customer-save', masterController.edit_customer_save);

//Group
app.get('/master/list-group', masterController.list_group);
app.post('/master/list-group-ajax', masterController.list_group_ajax);
app.post('/master/group-add', masterController.group_add);
app.post('/master/group-get', masterController.group_get);
app.post('/master/group-edit', masterController.group_edit);
app.get('/master/group-delete/:id', masterController.group_delete);



//Bill
var billController = require("../controllers/billController");
app.get('/bill/add-bill', billController.add_bill);



module.exports = app;