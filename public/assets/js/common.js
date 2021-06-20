commonJSObject= new function() {
  

  //common functions----------------
  this.alertShowMessage = function(type,message){
    console.log(message)
    $('#snackbar').removeClass('error');
    if(type.toLowerCase() == 'error'){
      $('#snackbar').addClass('error');
    }

    $('#snackbar').html('');
    $('#snackbar').html(message);
    
    $('#snackbar').addClass('show');
    setTimeout(function(){ 
      $('#snackbar').removeClass('show');
      
    }, 3000);
  }
}