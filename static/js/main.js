/**
 * Created by sp41mer on 19.10.16.
 */
$(document).ready(function(){
    $('.js__request_form').submit(function(e){
        e.preventDefault();
        var url = $(this).attr('action');
        console.log(url);
        ajaxPost(url, $(this).serializeArray(), function(e){
            console.log(e);
        });
        return false;
    });
    $(".phone-validator").mask("9(999)999-99-99");

    $(".phone-validator").on("blur", function() {
        var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

        if( last.length == 3 ) {
            var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
            var lastfour = move + last;
            var first = $(this).val().substr( 0, 9 );

            $(this).val( first + '-' + lastfour );
        }
    });
    //var jsonForAjax = $(this).serialize();
    //$.post( "", jsonForAjax);
});