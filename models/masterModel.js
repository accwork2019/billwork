/**
 * Master Model
 */

module.exports = {
  
  add_customer: function(post, controllerCallback) {    
    var sql = " INSERT INTO customers (name,address,phone,email,discount_rate) "
            + " VALUES('"+post.name+"','"+post.address+"','"+post.phone+"','"+post.email+"','"+post.discount_rate+"') ";    
    dbObject.query(sql, (err, result) => {     
      controllerCallback(err, result);      
    })
        
  },

  edit_customer: function(post, controllerCallback) {    
    var sql = " UPDATE customers SET name='"+post.name+"',address ='"+post.address+"',phone='"+post.phone+"',email='"+post.email+"',discount_rate='"+post.discount_rate+"' WHERE id='"+post.id+"'";   
    dbObject.query(sql, (err, result) => {     
      controllerCallback(err, result);      
    })        
  },

  list_customer: function(post, controllerCallback) {  

    var where = ''; 
    var orderBy ='';
    if(typeof post.search != 'undefined' && post.search.value != ''){
      where =" AND (name like '"+post.search.value+"%' )";
    } 

    var limit = " LIMIT "+ post.start +", "+post.length
    var sql = "SELECT * FROM customers WHERE 1=1 "+where

    if(typeof post.order[0].column != 'undefined' && post.order[0].column >= 0){
      orderBy = ' ORDER BY name '+post.order[0].dir
    }

    dbObject.query(sql+orderBy+limit, (err, result) => {          
      var sql_count = "SELECT count(id) as tot_record FROM customers WHERE 1=1 "+where
      dbObject.query(sql_count, (err, result_count) => {  
        controllerCallback(err, result,result_count[0].tot_record); 
      })       
    })    
  }, 

  
  get_customer: function(id, controllerCallback) {    
    var sql = "SELECT id,name,address,phone,email,discount_rate,created_on FROM customers WHERE id = '"+id+"'";
    dbObject.query(sql, (err, result) => {     
      controllerCallback(err, result);      
    })     
  }, 


  // Group
  list_member_ajax: function(post, controllerCallback) {
    var where = ''; 
    var orderBy ='';
    if(typeof post.search != 'undefined' && post.search.value != ''){
      where =" AND (group_name like '"+post.search.value+"%' )";
    } 

    var limit = " LIMIT "+ post.start +", "+post.length
    var sql = "SELECT id,group_name,status FROM group_master WHERE 1=1 "+where

    if(typeof post.order[0].column != 'undefined' && post.order[0].column >= 0){
      orderBy = ' ORDER BY group_name '+post.order[0].dir
    }
    dbObject.query(sql+orderBy+limit, (err, result) => {          
      var sql_count = "SELECT count(id) as tot_record FROM group_master WHERE 1=1 "+where
      dbObject.query(sql_count, (err, result_count) => {  
        controllerCallback(err, result,result_count[0].tot_record); 
      })       
    })     
  }, 
  
  add_group: function(post, controllerCallback) {    
    var sql = " INSERT INTO group_master (group_name) "
            + " VALUES('"+post.group+"') ";    
    dbObject.query(sql, (err, result) => {     
      controllerCallback(err, result);      
    })        
  },
  
  get_group: function(post, controllerCallback) {    
    var sql = " SELECT * FROM  group_master WHERE id = '"+post.id+"' ";    
    dbObject.query(sql, (err, result) => {     
      controllerCallback(err, result);      
    })        
  },
  edit_group: function(post, controllerCallback) {    
    var sql = " UPDATE group_master SET group_name='"+post.group_name+"' , status='"+post.status+"' WHERE id='"+post.edit_id+"' ";            
    dbObject.query(sql, (err, result) => {     
      controllerCallback(err, result);      
    })        
  },

  delete_group: function(id, controllerCallback) {    
    var sql = "DELETE FROM  group_master  WHERE id='"+id+"' ";            
    dbObject.query(sql, (err, result) => {     
      controllerCallback(err, result);      
    })        
  },

};