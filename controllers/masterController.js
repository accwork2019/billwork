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
    console.log(req.body);        
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
  

};