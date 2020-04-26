/**
 * Master Controller
 */
//include model
var masterModel = require("../models/masterModel");

module.exports = {
  /*
  list_customer: function(req, res) {
    var responseData = {
      requestUrl : req.originalUrl
    }
    res.render('Master/customer_list', {response:responseData});
  }, 
  */
  //Customer
  add_customer: function(req, res) {
    var responseData = {
      requestUrl : req.originalUrl,
      message_success:req.flash('success'),
    }
     res.render('Master/customer_add', {response:responseData});
  }, 

  add_customer_save: function(req, res) {        
    masterModel.add_customer(req.body,function(err, result){  
      req.flash('success', 'One customer record inserted');
      res.redirect('/master/add-customer');
    });
  }, 

  edit_customer_save: function(req, res) {       
    masterModel.edit_customer(req.body,function(err, result){  
      req.flash('success', 'One customer record updated');
      res.redirect('/master/edit-customer/'+req.body.id);
    });
  }, 


  edit_customer: function(req, res) {    
    masterModel.get_customer(req.params.id,function(err, result){  
      //console.log(result);
      var responseData = {
        requestUrl : req.originalUrl,
        data:result,     
      }
      res.render('Master/customer_edit', {response:responseData});
    });
  }, 

  list_customer: function(req, res) {
    var responseData = {
      requestUrl : req.originalUrl,  
    }
    res.render('Master/customer_list', {response:responseData});
  },

  customer_delete: function(req, res) {   
    masterModel.delete_customer(req.params.id,function(err, result){  
      req.flash('success', 'One customer has been deleted successfully');
      res.redirect('/master/list-customer');
    });
  }, 

  list_customer_ajax: function(req, res) {   
    masterModel.list_customer(req.body,function(err, result,recordCount){     
      var responseData = {
        draw              :  req.body.draw,
        recordsTotal      :  recordCount,
        recordsFiltered   :  recordCount,
        message_success   :  req.flash('success'),
        data              :  result
      };      
      res.contentType('application/json');
      res.send(JSON.stringify(responseData));
    });
  },


  //Item
  add_item: function(req, res) {
    masterModel.get_optgroup(req,function(err, result){ 
    var responseData = {
      requestUrl : req.originalUrl,
      message_success:req.flash('success'),
      group:result
    }
    res.render('Master/item_add', {response:responseData});
    });

  }, 

  add_item_save: function(req, res) {        
    masterModel.add_item(req.body,function(err, result){  
      req.flash('success', 'One menu record inserted');
      res.redirect('/master/add-item');
    });
  }, 

  edit_item_save: function(req, res) {
    masterModel.edit_item(req.body,function(err, result){  
      req.flash('success', 'One menu record updated');
      res.redirect('/master/edit-item/'+req.body.id);
    });
  }, 


  edit_item: function(req, res) {  
    masterModel.get_optgroup(req,function(err, result1){   
      masterModel.get_item(req.params.id,function(err, result){  
        var responseData = {
          requestUrl : req.originalUrl,
          data:result, 
          group:result1    
        }
        console.log('result ',result);
        res.render('Master/item_edit', {response:responseData});
      });
    });
    // masterModel.get_item(req.params.id,function(err, result){  
    //   var responseData = {
    //     requestUrl : req.originalUrl,
    //     data:result   
    //   }
    //    res.render('Master/item_edit', {response:responseData});
    // });
  }, 

  // export_item: function(req, res) { 
  //   masterModel.export_item(req.params.id,function(err, result){  
  //     var responseData = {
  //       requestUrl : req.originalUrl,
  //       data:result   
  //     }
       
  //   });
  // }, 

  item_delete: function(req, res) {   
    masterModel.delete_item(req.params.id,function(err, result){  
      req.flash('success', 'One menu has been deleted successfully');
      res.redirect('/master/list-item');
    });
  }, 

  list_item: function(req, res) {
    var responseData = {
      requestUrl : req.originalUrl,  
    }
    res.render('Master/item_list', {response:responseData});
  },


  list_item_ajax: function(req, res) {   
    masterModel.list_item(req.body,function(err, result,recordCount){     
      var responseData = {
        draw              :  req.body.draw,
        recordsTotal      :  recordCount,
        recordsFiltered   :  recordCount,
        message_success   :  req.flash('success'),
        data              :  result
      };      
      res.contentType('application/json');
      res.send(JSON.stringify(responseData));
    });
  },


  //Group
  
  list_group: function(req, res) {
    var responseData = {
      requestUrl      : req.originalUrl,     
      message_success :  req.flash('success'),   
    }
    res.render('Master/group_list', {response:responseData});
  },

  list_group_ajax: function(req, res) {
    masterModel.list_member_ajax(req.body,function(err, result,recordCount){     
      var responseData = {
        draw              :  req.body.draw,
        recordsTotal      :  recordCount,
        recordsFiltered   :  recordCount,
        message_success   :  req.flash('success'),
        data              :  result
      };      
      res.contentType('application/json');
      res.send(JSON.stringify(responseData));
    });
  },
  group_add: function(req, res) {        
    masterModel.add_group(req.body,function(err, result){  
      req.flash('success', 'One group inserted successfully');
      res.redirect('/master/list-group');
    });
  }, 
  group_get: function(req, res) {        
    masterModel.get_group(req.body,function(err, result){  
      res.contentType('application/json');
      res.send(JSON.stringify(result));      
    });
  }, 
  group_edit: function(req, res) {        
    masterModel.edit_group(req.body,function(err, result){  
      req.flash('success', 'One group has been updated successfully');
      res.redirect('/master/list-group');
    });
  }, 
  group_delete: function(req, res) {   
    masterModel.delete_group(req.params.id,function(err, result){  
      req.flash('success', 'One group has been deleted successfully');
      res.redirect('/master/list-group');
    });
  }, 
  
  //Wine Group
  
  list_wine_group: function(req, res) {
    var responseData = {
      requestUrl      : req.originalUrl,     
      message_success :  req.flash('success'),   
    }
    res.render('Master/wine_group_list', {response:responseData});
  },

  list_wine_group_ajax: function(req, res) {
    masterModel.list_wine_member_ajax(req.body,function(err, result,recordCount){     
      var responseData = {
        draw              :  req.body.draw,
        recordsTotal      :  recordCount,
        recordsFiltered   :  recordCount,
        message_success   :  req.flash('success'),
        data              :  result
      };      
      res.contentType('application/json');
      res.send(JSON.stringify(responseData));
    });
  },
  wine_group_add: function(req, res) {        
    masterModel.add_wine_group(req.body,function(err, result){  
      req.flash('success', 'One Wine group inserted successfully');
      res.redirect('/master/list-wine-group');
    });
  }, 
  wine_group_get: function(req, res) {
    masterModel.get_wine_group(req.body,function(err, result){  
      res.contentType('application/json');
      res.send(JSON.stringify(result));      
    });
  }, 
  wine_group_edit: function(req, res) {  
    masterModel.edit_wine_group(req.body,function(err, result){  
      req.flash('success', 'One wine group has been updated successfully');
      res.redirect('/master/list-wine-group');
    });
  }, 
  wine_group_delete: function(req, res) {   
    masterModel.delete_wine_group(req.params.id,function(err, result){  
      req.flash('success', 'One wine group has been deleted successfully');
      res.redirect('/master/list-wine-group');
    });
  }, 

};