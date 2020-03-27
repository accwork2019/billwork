/**
 * User Controller
 */
//include model
var userModel = require("../models/userModel");

module.exports = {
  login: function(req, res) {
    var responseData = {
      userName: req.session.userName, 
      userPassword: req.session.userPassword, 
      loginResponse:req.session.loginResponse
    }
    res.render('User/login', {response:responseData});
  }, 

  login_auth: function(req, res) {
    var userName = req.body.username;
    var userPassword = req.body.password;
    //console.log( req.session);
      
    userModel.fetchResult(userName,userPassword,function(err, result){     
      var loginResponse = JSON.parse(JSON.stringify(result))
    
       if(typeof loginResponse[0] != 'undefined'){
          req.session.userName = ''
          req.session.userPassword = ''
          req.session.loginResponse = 1
          req.session.accountId = loginResponse[0].id;
          res.redirect('/dashboard');
       }else{
          req.session.userName = userName
          req.session.userPassword = userPassword
          req.session.loginResponse = 0
          res.redirect('/');
       }       
    
    });

  },

  logout: function(req, res) {
    req.session.destroy(function(err) {
      if (err) return console.log(err);
      return res.redirect('/');
    });
  },

  profile_edit: function(req, res) {
    var responseData = {
      requestUrl : req.originalUrl
    }
    res.render('User/login', {response:responseData});
  }, 

  profile_settings: function(req, res) {
    var responseData = {
      requestUrl : req.originalUrl
    }
    res.render('User/login', {response:responseData});
  }, 

  message: function(req, res) {
    var responseData = {
      requestUrl : req.originalUrl
    }
    res.render('User/listMessages', {response:responseData});
  }, 

};