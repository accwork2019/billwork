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
app.get('/master/customer-delete/:id', masterController.customer_delete);

//Item
app.get('/master/list-item', masterController.list_item);
app.post('/master/list-item-ajax', masterController.list_item_ajax);

app.get('/master/add-item', masterController.add_item);
app.get('/master/edit-item/:id', masterController.edit_item);
app.post('/master/add-item-save', masterController.add_item_save);
app.post('/master/edit-item-save', masterController.edit_item_save);
app.get('/master/item-delete/:id', masterController.item_delete);
// app.get('/master/export-item', masterController.export_item);

//Group
app.get('/master/list-group', masterController.list_group);
app.post('/master/list-group-ajax', masterController.list_group_ajax);
app.post('/master/group-add', masterController.group_add);
app.post('/master/group-get', masterController.group_get);
app.post('/master/group-edit', masterController.group_edit);
app.get('/master/group-delete/:id', masterController.group_delete);

//Wine Group
app.get('/master/list-wine-group', masterController.list_wine_group);
app.post('/master/list-wine-group-ajax', masterController.list_wine_group_ajax);
app.post('/master/wine-group-add', masterController.wine_group_add);
app.post('/master/wine-group-get', masterController.wine_group_get);
app.post('/master/wine-group-edit', masterController.wine_group_edit);
app.get('/master/wine-group-delete/:id', masterController.wine_group_delete);

//Bill
var billController = require("../controllers/billController");
app.get('/bill/add-bill', billController.add_bill);
app.post('/fetchItem', billController.fetch_item);
app.post('/submitKot', billController.submit_kot);
app.post('/entry_sale_bill', billController.entry_sale_bill);
app.post('/entry_sale_item', billController.entry_sale_item)




module.exports = app;