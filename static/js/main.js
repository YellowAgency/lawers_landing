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
        if ($(this).find('#id_phone_number').val().replace(/[^0-9]/g,"").length !=11){
            $(this).find('.number__span__error').show();
            return false;
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
              closeConsultation(this);
              return false;
        }
        return false;
    });
    $(".phone-validator").inputmask("+7 (999) 999 99 99");
});

