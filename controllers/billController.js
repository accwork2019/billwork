/**
 * Property Controller
 */
//include model
var billModel = require("../models/billModel");

module.exports = {
  list_bill: function(req, res) {
    var responseData = {
      requestUrl : req.originalUrl
    }
    res.render('Bill/listBill', {response:responseData});
  }, 
  add_bill: function(req, res) {
    var responseData = {
      requestUrl : req.originalUrl
    }
    res.render('Bill/addBill', {response:responseData});
  }, 
   
  
};