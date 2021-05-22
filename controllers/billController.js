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
  submit_kot: function(req, res) {
    var item_id = req.body.item_id;
    billModel.add_kot(item_id, function(err, result){
			//res.send(result);
			if (result) {
        if (result) {
          resultArray = result;
          var resultJson = JSON.stringify(resultArray);
				      res.send(resultJson);
              //res.send(1);
        }
			}
			
		});
  }, 
  entry_sale_bill: function(req, res) {
    var table_no = req.body.table_no;
    var discount_type = req.body.discount_type;
    var steward = req.body.steward;

    billModel.add_sale_bill(table_no,discount_type,steward, function(err, result){
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
  entry_sale_item: function(req, res) {
    var billId = req.body.bill_id;
    var orderedItemCode = req.body.ordered_item_code;
    var orderedItemQty = req.body.ordered_item_qty;
    var orderedItemRate = req.body.ordered_item_rate;
    var orderedItemMrp = req.body.ordered_item_mrp;
    var orderItemTaxType = req.body.order_item_tax_type;
    var orderedItemFoodType = req.body.ordered_item_food_type;
    var orderedItemAmount = req.body.ordered_item_amount;
    var del = req.body.del;
    var delQty = req.body.delQty;

    billModel.add_sale_item(billId,orderedItemCode,orderedItemQty,orderedItemRate,orderedItemMrp,orderItemTaxType,orderedItemFoodType,orderedItemAmount,del,delQty, function(err, result){
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