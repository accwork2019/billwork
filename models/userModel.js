/**
 * Property Model
 */


//module.exports = client;

module.exports = {
  fetchResult: function(userName,userPassword,controllerCallback) {
    
    var sql = "SELECT id FROM user_master WHERE username ='"+userName+"' AND password='"+userPassword+"'"; 
    
    dbObject.query(sql, (err, result) => {
      //dbObject.end()      
      controllerCallback(err, result);      
    })
    





  },
  auth_validation: function(userName,userPassword) {

    var sql = "SELECT account_id FROM user_accounts WHERE email ='"+userName+"' AND password='"+userPassword+"'"; 
    
    // client = dbObject.connect(dbConfig);
    // client.connect()
    // client.get_data(sql,function(err,result){
    //   array.push(result.rows);
    // });
    // console.log(array);
    
       
    
    //client.end();
    //dbObject.get_data(sql);
    

    //let data;
    var array = [];
    // dbObject.select(sql).then(response => function(result){       
    //   array.push(result.rows);  
    //   console.log(data);
    //   //return data;        
    // });  
    console.log(array);
    // return new Promise(response => data);    
  }
};