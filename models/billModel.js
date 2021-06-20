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
	fetch_booked_table_data: function(controllerCallback){
    try{
			var sql = "SELECT * FROM salebill WHERE settle = 0";
			//dbObject.select(sql);
			dbObject.query(sql, (err, result) => {
				controllerCallback(err, result)    
			})
		} catch(e){
			
		}
  },
	fetch_steward_data: function(controllerCallback){
    try{
			var sql = "SELECT * FROM  steward_master ";
			dbObject.query(sql, (err, result) => {
				controllerCallback(err, result)    
			})
		} catch(e){
			
		}
  },
	fetch_item_by_code: function(search_item_code, controllerCallback){
    try{
			var sql = "SELECT * FROM item_master WHERE itcode = '"+search_item_code+"' ";
			//dbObject.select(sql);
			dbObject.query(sql, (err, result) => {
				controllerCallback(err, result)    
			})
		} catch(e){
			
		}
  },
	fetch_item_by_table_no: function(search_table_no, controllerCallback){
    try{
			var sql = "SELECT id,waiter,disctype,apply_s_tax,apply_discount,apply_gst,discper FROM salebill WHERE `table` = '"+search_table_no+"' AND settle = 0";
			//dbObject.select(sql);
			dbObject.query(sql, (err, result) => {
				if(result.length > 0 && typeof result != undefined){
					var sql2 = "SELECT * FROM saleitem WHERE bill_id = "+result[0].id+" ";
					dbObject.query(sql2, (err, result1) => {
						controllerCallback(err, result, result1)    
					})
				}else{
					controllerCallback(err, result);    
				}
				
			})
		} catch(e){
			
		}

  },
  add_kot: function(billId, controllerCallback){
		
    try{
			var sql = "UPDATE saleitem SET kotno = (SELECT max(kotno)+1 from saleitem) WHERE kotno=0 and bill_id='"+billId+"' ";  //and send='N'
			
			dbObject.query(sql, (err, result) => {
				console.log('test-1', result)
        if(result){
					console.log('test-2', result)
					var sql2 = "SELECT * FROM saleitem WHERE bill_id = "+billId+" ";
					dbObject.query(sql2, (err, result1) => {
						console.log('result1', result1)
						controllerCallback(err, result1)    
					})
				}   
			})
		} catch(e){
			controllerCallback(err, 0) 
		}
  },
	add_sale_bill: function(table_no,discount_type,steward, controllerCallback){
		var bill_no = 0;
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
		//var disctype = 0;
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
			var sql = "INSERT INTO salebill (bill_no, `table`, discper, discamt, vatper, vatamt, roff, totamount, netamount, settle, paymode, taxtype, disctype, remarks, print, tableamount, cgstper, cgstamount, sgstper, sgstamount, foodamt, drinksamt, custname, custgst, waiter) VALUES ("+bill_no+",'"+table_no+"',"+discper+","+discamt+","+vatper+","+vatamt+","+roff+","+totamount+","+netamount+","+settle+","+paymode+","+taxtype+",'"+discount_type+"','"+remarks+"','"+print+"',"+tableamount+","+cgstper+","+cgstamount+","+sgstper+","+sgstamount+","+foodamt+","+drinksamt+",'"+custname+"','"+custgst+"', '"+steward+"')";
			console.log(sql)
			dbObject.query(sql, (err, result) => {
        
				controllerCallback(err, result)    
			})
		} catch(e){
			
		}
  },
	add_sale_item: function(billId,orderedItemCode,orderedItemQty,orderedItemRate,orderedItemMrp,orderItemTaxType,orderedItemFoodType,orderedItemAmount,del,delQty,ordered_item_description,order_item_note, controllerCallback){
		try{			
			var sql = "INSERT INTO `saleitem`(`bill_id`, `itcode`, `qty`, `rate`, `mrp`, `tax_type`, `food_type`, `amount`, `del`, `del_qty`,`note`,`description`) VALUES ("+billId+",'"+orderedItemCode+"',"+orderedItemQty+","+orderedItemRate+","+orderedItemMrp+",'"+orderItemTaxType+"','"+orderedItemFoodType+"',"+orderedItemAmount+",'"+del+"','"+delQty+"','"+order_item_note+"','"+ordered_item_description+"')"

			console.log(sql)
			dbObject.query(sql, (err, result) => {
				controllerCallback(err, result)    
			})
		} catch(e){
			
		}
	},

	//billing section------------------------------------------------
	get_company_details: function(controllerCallback){
		try{
			var sql = "SELECT * FROM company_details";
			dbObject.query(sql, (err, result) => {
				controllerCallback(err, result) ;
			})
		}catch{
			controllerCallback(err, 0) 
		}
		

	},
	get_bill_details_from_sailbill: function(table_no, controllerCallback){
		try{
			var sql = "SELECT id,disctype,apply_s_tax,apply_discount,apply_gst,discper FROM salebill WHERE `table`='"+table_no+"' "; 
			dbObject.query(sql, (err, result) => {
				controllerCallback(err, result) ;
			})
		} catch(e){
			controllerCallback(err, 0) 
		}
	},
	get_sub_total: function(sale_bill_id, controllerCallback){
		try{
			var sql = "SELECT sum(amount) from saleitem where bill_id="+sale_bill_id+" ";
			dbObject.query(sql, (err, result) => {
				controllerCallback(err, result) 
			})
		}catch{
			controllerCallback(err, 0);
		}
		
	},
	get_discount_amt: function(table_id,discount_type, controllerCallback){
    try{
				if(discount_type == 'f'){
					var sql = "SELECT sum(amount) from saleitem where bill_id="+table_id+" and food_type='Food'";
				}else if(discount_type == 'd'){
					var sql = "SELECT sum(amount) from saleitem where bill_id="+table_id+" and food_type='Drinks'";
				}else{
					var sql = "SELECT sum(amount) from saleitem where bill_id="+table_id+"";
				}
				
				dbObject.query(sql, (err, result) => {
					controllerCallback(err, result)    
				})
		} catch(e){
			controllerCallback(err, 0) 
		}
  },
	get_taxable_amount: function(table_id, controllerCallback){
    try{
				var sql = "SELECT sum(amount) from saleitem where bill_id="+table_id+" and tax_type='Taxable'";
				dbObject.query(sql, (err, result) => {
					controllerCallback(err, result)    
				})
		} catch(e){
			controllerCallback(err, 0) 
		}
  },
	get_total_item: function(table_id, controllerCallback){
    try{
				var sql = "SELECT sum(qty) from saleitem where bill_id="+table_id+" ";
				dbObject.query(sql, (err, result) => {
					controllerCallback(err, result)    
				})
		} catch(e){
			controllerCallback(err, 0) 
		}
  },
	get_sub_total_drinks: function(table_id, controllerCallback){
    try{
			var sql = "SELECT sum(amount) from saleitem where bill_id="+table_id+" and food_type='Drinks'";
				dbObject.query(sql, (err, result) => {
					controllerCallback(err, result)    
				})
		} catch(e){
			controllerCallback(err, 0) 
		}
  },
	apply_servicetax_discount_gst: function(table_no,add_service_tips_flag,add_discount_flag,discount_percentage,add_gst_flag, controllerCallback){
    try{
			var sql = "UPDATE salebill SET apply_s_tax='"+add_service_tips_flag+"', apply_discount='"+add_discount_flag+"', discper="+discount_percentage+", apply_gst='"+add_gst_flag+"'  WHERE `table`='"+table_no+"' "; 
			console.log('apply_servicetax_discount_gst', sql)
				dbObject.query(sql, (err, result) => {
					controllerCallback(err, result)    
				})
		} catch(e){
			controllerCallback(err, 0) 
		}
  },
	update_discount_percentage: function(bill_id,discount_percentage, controllerCallback){
    try{
			var sql = "UPDATE salebill SET discper="+discount_percentage+" WHERE id='"+bill_id+"' "; 
			
				dbObject.query(sql, (err, result) => {
					controllerCallback(err, result)    
				})
		} catch(e){
			controllerCallback(err, 0) 
		}
  },
  
};