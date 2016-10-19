function getConsultation(e){
    document.getElementById('openModal').style.visibility = 'visible';
    document.getElementById('openModal').style.opacity = '1'
}

function closeConsultation(e){
    document.getElementById('openModal').style.visibility = 'hidden';
    document.getElementById('openModal').style.opacity = '0'
}

$(document).ready(function(){
    $('.js__request_form').submit(function(e){
        e.preventDefault();
        var url = $(this).attr('action');
        var email_re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        if (!($(this).find('#id_client_name').val())){
            $(this).find('.name__span__error').show();
        }
        if (!($(this).find('#id_claim_text').val())){
            $(this).find('.question__span__error').show();
        }
        if (!($(this).find('#id_phone_number').val())){
            $(this).find('.number__span__error').show();
        }
        if (!($(this).find('#id_email').val().match(email_re))){
            $(this).find('.email__span__error').show();
        }
        if ($(this).find('#id_client_name').val()&&$(this).find('#id_claim_text').val()&&$(this).find('#id_phone_number').val()&&$(this).find('#id_email').val()){
              var myForm = $(this).serializeArray();
              var newThis = $(this);
              $(this).find('.name__span__error').hide();
              $(this).find('.question__span__error').hide();
              $(this).find('.number__span__error').hide();
              $(this).find('.email__span__error').hide();

              ajaxPost(url, myForm, function(e){
                  console.log(e);
                  newThis.find('#id_client_name').val('');
                  newThis.find('#id_phone_number').val('');
                  newThis.find('#id_claim_text').val('');
                  newThis.find('#id_email').val('');
                  dataLayer.push({'event':'contactFormSent'})
                  swal("Спасибо!", "Заявка принята в обработку.", "success");
              });
              return false;
        }
        return false;
    });
    $(".phone-validator").mask("+7 (999) 999 99 99");

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

