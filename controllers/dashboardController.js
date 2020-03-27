/**
 * Property Controller
 */
//include model
var propertyModel = require("../models/dashboardModel");

module.exports = {
  dashboard: function(req, res) {
    var responseData = {
      requestUrl : req.originalUrl
    }
    res.render('Dashboard/dashboard', {response:responseData});
  },  
  
};