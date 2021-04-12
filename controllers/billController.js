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
  fetch_item: function(req, res) {
    var search_key = req.body.search_text;
    billModel.fetch_item(search_key, function(err, result){
			//res.send(result);
			if (result) {
        if (result) {
          resultArray = result;
          var resultJson = JSON.stringify(resultArray);
				      res.send(resultJson);
        }
			}
			
		});
  }, 

   
  
};