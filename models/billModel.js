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
			var sql = "SELECT id, name, rate FROM item_master";
			//dbObject.select(sql);
			dbObject.query(sql, (err, result) => {
				controllerCallback(err, result)    
			})
		} catch(e){
			
		}
  }
  
};