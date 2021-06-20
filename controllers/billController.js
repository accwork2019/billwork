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
    var stewardData = '';
    var bookedTableData = '';
    billModel.fetch_steward_data(function(err, result){
			//res.send(result);
        if (result) {
          stewardData = result;
          billModel.fetch_booked_table_data(function(err, result1){
            //res.send(result);
              if (result1) {
                bookedTableData = result1;
              }
              res.render('Bill/addBill', {response:responseData, stewardData:stewardData, bookedTableData:bookedTableData});
          });
        }
        //res.render('Bill/addBill', {response:responseData, stewardData:stewardData});
		});
    
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
  fetch_item_by_code: function(req, res) {
    var search_item_code = req.body.search_item_code;
    billModel.fetch_item_by_code(search_item_code, function(err, result){
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
  fetch_item_by_table_no: function(req, res) {
    var search_table_no = req.body.search_table_no;
    billModel.fetch_item_by_table_no(search_table_no, function(err, result, result1){
			//res.send(result);
			if (result) {
        if (result) {
          var responseData = {
            sell_item : result1,
            waiter: result
          }
          
          var resultJson = JSON.stringify(responseData);
				      res.send(resultJson);
        }
			}
			
		});
  }, 
  submit_kot: function(req, res) {
    var billId = req.body.bill_id;
    billModel.add_kot(billId, function(err, result){
			//res.send(result);
			//if (result) {
        if (result) {
          resultArray = result;
          var resultJson = JSON.stringify(resultArray);
          console.log('controller', resultJson)
				      res.send(resultJson);
              //res.send(1);
        }
			//}
			
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
    var ordered_item_description = req.body.ordered_item_description;
    var order_item_note = req.body.order_item_remarks;

    billModel.add_sale_item(billId,orderedItemCode,orderedItemQty,orderedItemRate,orderedItemMrp,orderItemTaxType,orderedItemFoodType,orderedItemAmount,del,delQty,ordered_item_description,order_item_note, function(err, result){
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
  apply_servicetax_discount_gst: function(req, res) {
    var table_no = req.body.table_no;
    var add_service_tips_flag = req.body.add_service_tips;
    var add_discount_flag = req.body.add_discount;
    var discount_percentage = req.body.discount_percentage;
    var add_gst_flag = req.body.add_gst;
    

    billModel.apply_servicetax_discount_gst(table_no,add_service_tips_flag,add_discount_flag,discount_percentage,add_gst_flag, function(err, result){
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
  update_discount_percentage: function(req, res) {
    var bill_id = req.body.bill_id;
    var discount_percentage = req.body.discount_percentage;

    billModel.update_discount_percentage(bill_id,discount_percentage, function(err, result){
			//res.send(result);
			if (result) {
        if (result) {
          resultArray = result;
          var resultJson = JSON.stringify(resultArray);
				      res.send('1');
        }else{
          res.send('0');
        }
			}else{
        res.send('0');
      }
			
		});
  }, 
  calculate_bill: function(req, res) {
    var table_no = req.body.table_no;

    var sale_bill_id = ''; 
    var discount_type = '';
    var sub_total = 0;
    var discount_amt = 0;
    var taxable_amt = 0;
    var total_item_qty = 0;
    var drinks_amt = 0;
    var sgst_amt = 0;
    var cgst_amt = 0;
    var net_amt = 0;
    var setvice_tips = 0;
    var gst_amt = 0;

    
    var gst_percentage = 0;
    var cgst_percentage = 0;
    var sgst_percentage = 0;
    var service_tips_percentage = 0;
    var discount_percentage = 0;
    

    billModel.get_company_details(function(err, result){
      if (result) {
        //discount_percentage = result[0].discount; 
        gst_percentage = result[0].gst;
        cgst_percentage = result[0].cgst;
        sgst_percentage = result[0].sgst;
        service_tips_percentage = result[0].service_tips;
      }
    })

    billModel.get_bill_details_from_sailbill(table_no, function(err, billDetailsResult){
      if (billDetailsResult) {
        sale_bill_id = billDetailsResult[0].id;
        discount_type = billDetailsResult[0].disctype;
        
        var add_service_tips_flag = billDetailsResult[0].apply_s_tax;
        var add_discount_flag = billDetailsResult[0].apply_discount;
        var add_gst_flag = billDetailsResult[0].apply_gst;
        discount_percentage = billDetailsResult[0].discper;

        if(add_service_tips_flag == 'false'){
          service_tips_percentage = 0
        }

        if(add_discount_flag == 'false'){
          discount_percentage = 0
        }

        if(add_gst_flag == 'false'){
          gst_percentage = 0
          cgst_percentage = 0
          sgst_percentage = 0
        }

        billModel.get_sub_total(sale_bill_id, function(err, subTotalResult){
          if (subTotalResult) {
            sub_total = parseFloat(subTotalResult[0]["sum(amount)"]);
            
            
            billModel.get_discount_amt(sale_bill_id,discount_type, function(err, discountAmtResult){
              if (discountAmtResult) {
                var resultAmt = discountAmtResult[0]["sum(amount)"];
                    discount_amt = (resultAmt*discount_percentage)/100;


                    billModel.get_taxable_amount(sale_bill_id, function(err, totalTaxAbleAmt){    //Get Taxable Amount
                      if (totalTaxAbleAmt) {
                        taxable_amt = parseFloat(totalTaxAbleAmt[0]["sum(amount)"]);

                        billModel.get_total_item(sale_bill_id, function(err, totalItem){    //Get total item
                          if (totalItem) {
                            total_item_qty = parseFloat(totalItem[0]["sum(qty)"]);

                            billModel.get_sub_total_drinks(sale_bill_id, function(err, subTotalDrinkdAmt){  //Get Drinks Amount
                              if (subTotalDrinkdAmt) {
                                drinks_amt = parseFloat(subTotalDrinkdAmt[0]["sum(amount)"]);
                              }
                              //----------------------------
                              if(discount_type == 'f'){   //Calculate SGST AMOUNT
                                var temp_sgst_amt = (taxable_amt - discount_amt);
                                sgst_amt = (temp_sgst_amt*sgst_percentage)/100;
                              }else if(discount_type == 'all'){
                                var temp_sgst_amt = (taxable_amt - (taxable_amt*discount_percentage)/100);
                                sgst_amt = (temp_sgst_amt*sgst_percentage)/100;
                              }else{
                                sgst_amt = (taxable_amt*sgst_percentage)/100;
                              }

                              if(discount_type == 'f'){   //Calculate CGST AMOUNT
                                var temp_sgst_amt = (taxable_amt - discount_amt);
                                cgst_amt = (temp_sgst_amt*cgst_percentage)/100;
                              }else if(discount_type == 'all'){
                                var temp_sgst_amt = (taxable_amt - (taxable_amt*discount_percentage)/100);
                                cgst_amt = (temp_sgst_amt*cgst_percentage)/100;
                              }else{
                                cgst_amt = (taxable_amt*cgst_percentage)/100;
                              }

                              //calculate service tips amount
                              var temp_setvice_tips = sub_total-discount_amt+sgst_amt+cgst_amt;
                              setvice_tips = (temp_setvice_tips*service_tips_percentage)/100;

                              gst_amt = cgst_amt+sgst_amt;

                              //calculate net amount
                              net_amt = sub_total-discount_amt+cgst_amt+sgst_amt+setvice_tips;

                              var responseData = {
                                sub_total : sub_total,
                                discount_percentage: discount_percentage,
                                discount_amt:discount_amt,
                                gst_percentage:gst_percentage,
                                cgst_percentage:cgst_percentage,
                                sgst_percentage:sgst_percentage,
                                taxable_amt:taxable_amt,
                                total_item_qty:total_item_qty,
                                drinks_amt:drinks_amt,
                                sgst_amt:sgst_amt,
                                cgst_amt:cgst_amt,
                                gst_amt:gst_amt,
                                net_amt:net_amt,
                                service_tips_percentage:service_tips_percentage,
                                setvice_tips:setvice_tips

                              }

                              var resultJson = JSON.stringify(responseData);
                              res.send(resultJson);
                              //---------------------------

                            })
                          }
                          

                        })

                      }
                    });
              }
            });
          }
        })
        
      }
    })


   /* billModel.get_sub_total(sale_bill_id, function(err, subTotalResult){
      if (subTotalResult) {
        sub_total = parseFloat(subTotalResult[0]["sum(amount)"]);
        
      }
    })*/


    /*billModel.get_sub_total(table_no, function(err, result){
			//res.send(result);
			if (result) {
        if (result) {
          resultArray = result;
         // var resultJson = JSON.stringify(resultArray);
            var discount_percentage = 2;
            var sum_amt = parseFloat(result[0]["sum(amount)"]);
            var disc_amt = (sum_amt*discount_percentage)/100;
            var responseData = {
              disc_amt : disc_amt,
              discount_percentage: discount_percentage,
            }

            var resultJson = JSON.stringify(responseData);
				    res.send(resultJson);
        }
			}
			
		});*/
  }, 

   
  
};