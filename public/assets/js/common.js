coreVariable = new function() {







  


  /*-------------------------------- AUTO COMPLETE SEARCH -----------------------------------*/
  this.searchItems = function (element){

    $.ui.autocomplete.prototype._renderItem = function (ul, item) {
			item.label = item.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + $.ui.autocomplete.escapeRegex($.trim(this.term)) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
			return $( "<li class='search-result'>" )
					.attr( "data-value", item.value )
					.append( item.label )
					.appendTo( ul );
		};


    var searchKey = $(element).val();
    $(element).autocomplete({
      source: function( request, response ) {
        var inputValue = $.trim(request.term);
				    searchKey = inputValue;
				$.ajax( {
					url: '/fetchItem',
					type: "POST",
					data: {
						search_text: inputValue
					},
					success: function( data ) { 
            var result_data = JSON.parse(data);
            var data_arr = [];
            if(result_data.length > 0){
              $(result_data).each(function(i,v){
                var html = '<span data-item-id="'+v.id+'" data-item-rate="'+v.rate+'" data-item-name="'+v.name+'">'+v.name+'</span>';
                data_arr.push(html);
              })
            }
						response( data_arr);
					}
				} );
      },
      select: function( event, ui ) { 
				coreVariable.showSearchResultSelectValue(function(dataValue) { 
          setTimeout(function(){
            if($.trim(dataValue) != ''){
              $(element).val(dataValue); 
            }else{
              $(element).val('');
            }
          },5);
      });
			},
      minLength: 3,
    });
  }; 

  this.showSearchResultSelectValue = function (callback) {
		var dataValue = '';
			  dataValue = $('.ui-state-active').attr('data-item-name');
    var itemRate = $('.ui-state-active').attr('data-item-rate');
    var defaultQty = 1;
    $('.active-item-row').find('.qty').val(defaultQty);
    $('.active-item-row').find('.price').val(itemRate);
    callback(dataValue);
	};




  

}


$(document).ready(function(){
  
  $(document).on('focus','.item', function(){
    $('.active-item-row').removeClass('active-item-row');
    $(this).closest('tr').addClass('active-item-row');

		if ($(this).hasClass('ui-autocomplete-input')) {
		 $(this).autocomplete("destroy");
		}
		var element = $(this);
    coreVariable.searchItems(element);
		
	});


})  //document ready end