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
        if (!($(this).find('#id_phone_number').val())){
            $(this).find('.number__span__error').show();
        }
        /*TODO: тут надо добавить валидацию телефона, а то он трётся*/
        if ($(this).find('#id_phone_number').val()){
              var myForm = $(this).serializeArray();
              var newThis = $(this);
              $(this).find('.number__span__error').hide();

              ajaxPost(url, myForm, function(e){
                  console.log(e);
                  newThis.find('#id_phone_number').val('');
                  newThis.find('#id_claim_text').val('');
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
});

