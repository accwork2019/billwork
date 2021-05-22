/**
 * Property Model
 */

module.exports = {
  get_property: function(req, res) {
      var sql = "SELECT listing_id,listing_key,property_name,description_additional,country FROM property_listings";
      dbObject.select(sql);      
  },
  fetch_item: function(search_key, controllerCallback){
    try{
			var sql = "SELECT * FROM item_master WHERE ( name like '"+search_key+"%' OR id = '"+search_key+"')   ";
			//dbObject.select(sql);
			dbObject.query(sql, (err, result) => {
				controllerCallback(err, result)    
			})
		} catch(e){
			
		}
  },
  add_kot: function(item_id, controllerCallback){
    try{
			var sql = "INSERT into kot_master (item_id, send_status) VALUES (1, 0)";
			console.log(sql)
			dbObject.query(sql, (err, result) => {
        console.log(err)
        console.log(result)

				controllerCallback(err, result)    
			})
		} catch(e){
			
		}
  },
	add_sale_bill: function(table_no,discount_type,steward, controllerCallback){
		var bill_no = 0;
		var table = '';
		var discper = 0;
		var discamt = 0;
		var vatper = 0;
		var vatamt = 0;
		var roff = 0;
		var totamount = 0;
		var netamount = 0;
		var settle = 0;
		var paymode = 0;
		var taxtype = 0;
		var disctype = 0;
		var remarks = '';
		var print = '';
		var tableamount = 0;
		var cgstper = 0;
		var cgstamount = 0;
		var sgstper = 0;
		var sgstamount = 0;
		var foodamt = 0;
		var drinksamt = 0;
		var custname = '';
		var custgst = '';
    try{
			var sql = "INSERT INTO salebill (bill_no, `table`, discper, discamt, vatper, vatamt, roff, totamount, netamount, settle, paymode, taxtype, disctype, remarks, print, tableamount, cgstper, cgstamount, sgstper, sgstamount, foodamt, drinksamt, custname, custgst) VALUES ("+bill_no+",'"+table_no+"',"+discper+","+discamt+","+vatper+","+vatamt+","+roff+","+totamount+","+netamount+","+settle+","+paymode+","+taxtype+","+disctype+",'"+remarks+"','"+print+"',"+tableamount+","+cgstper+","+cgstamount+","+sgstper+","+sgstamount+","+foodamt+","+drinksamt+",'"+custname+"','"+custgst+"')";
			console.log(sql)
			dbObject.query(sql, (err, result) => {
        
				controllerCallback(err, result)    
			})
		} catch(e){
			
		}
  },
	add_sale_item: function(billId,orderedItemCode,orderedItemQty,orderedItemRate,orderedItemMrp,orderItemTaxType,orderedItemFoodType,orderedItemAmount,del,delQty, controllerCallback){
		try{			
			var sql = "INSERT INTO `saleitem`(`bill_id`, `itcode`, `qty`, `rate`, `mrp`, `tax_type`, `food_type`, `amount`, `del`, `del_qty`) VALUES ("+billId+",'"+orderedItemCode+"',"+orderedItemQty+","+orderedItemRate+","+orderedItemMrp+",'"+orderItemTaxType+"','"+orderedItemFoodType+"',"+orderedItemAmount+",'"+del+"','"+delQty+"')"

			console.log(sql)
			dbObject.query(sql, (err, result) => {
				controllerCallback(err, result)    
			})
		} catch(e){
			
		}
	}
  
};