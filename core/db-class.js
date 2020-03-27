// //include Mysql Module to connect database
var mysql = require('mysql');
const connection  = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
  });

  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }   
    console.log('Connected to the MySQL server.');
  });

  
module.exports = connection;

// const Client = require('pg').Client
// const client = new Client({
//   user      : dbConfig.user,
//   password  : dbConfig.password,
//   host      : dbConfig.host,
//   port      : dbConfig.port,
//   database  : dbConfig.database
// })


/*
module.exports = {    
    connect: function(config) {        
        const client = new Client({
            user      : config.user,
            password  : config.password,
            host      : config.host,
            port      : config.port,
            database  : config.database
        });
        return client;
    },

    //fetchResult:function 

    get_data:function(sql){
        client = this.connect(dbConfig);
        console.log(sql);
        client.connect()
        client.query(sql,function(err,result){
            return result;
            console.log(result);
        });

    },
    
    //For fetch data from database SELECT Query
    select: async function(sql,debug = 0) { 
        client = this.connect(dbConfig); 
               
        try{        
            await client.connect()
            if(debug == 1){
                console.log("Connected successfully.")
            }

            //execute select query
            const rows = await client.query(sql)           

            if(debug == 1){
                console.table(rows)
            }  
            return rows;             
        }
        catch (ex)
        {
            if(debug == 1){
                console.log('Something wrong happend ${ex}')
            }
        }
        finally 
        {
            await client.end()
            if(debug == 1){
                console.log("Client disconnected successfully.")   
            }             
        }       
 
    },

    //Update,Delete,Insert Query
    query: async function(sql) { 
        client = this.connect(dbConfig);
        try{        
            await client.connect()
            console.log("Connected successfully.")
            await client.query("insert into employees values (1, 'John')")            
        }
        catch (ex)
        {
            console.log('Something wrong happend ${ex}')
        }
        finally 
        {
            await client.end()
            console.log("Client disconnected successfully.")    
        }            
    }
};
*/