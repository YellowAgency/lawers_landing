/**
 * Created by sp41mer on 19.10.16.
 */
$(document).ready(function(){
    $('.js__request_form').submit(function(e){
        e.preventDefault();
        var jsonForAjax = $(this).serialize();
        $.post( "", jsonForAjax);
    })
});