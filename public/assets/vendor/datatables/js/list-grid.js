jQuery(document).ready(function($) {
    'use strict';

    if ($("#listGrid").length) {
        
        $(document).ready(function() {
            $('#listGrid').DataTable({                
                "lengthChange": false,
                "processing":true,
                "responsive": true,
                "serverSide":true,   
                "columnDefs": listGridActionCol,
                'serverMethod': 'post',
                "ajax": listGridajaxURL,
                'columns': listGridColumns,
                "pageLength": 10,
                "select": {
                    style: 'multi'
                }     
            },        
        );
        } );        
    }

});


/* List Grid Functions   */
function confirm_delete(path){

    $.confirm({
        title: 'Confirm!',
        content: 'Simple confirm!',
        buttons: {
            confirm: function () {
                location.href = path;
            },
            cancel: function () {
                //$.alert('Canceled!');
            }            
        }
    });
}