/**
 * Property Model
 */

module.exports = {
  get_property: function(req, res) {
      var sql = "SELECT listing_id,listing_key,property_name,description_additional,country FROM property_listings";
      dbObject.select(sql);      
  },
  
};