/**
 * Created by sp41mer on 19.10.16.
 */
$(document).ready(function(){
    $('.js__request_form').submit(function(e){
        e.preventDefault();
        $(this).validate({
            rules:{

                name:{
                    required: true,
                    minlength: 4,
                    maxlength: 16
                },

                phone_number:{
                    required: true,
                    minlength: 6,
                    maxlength: 16
                },

                question:{
                    required: true,
                    minlength: 4,
                    maxlength: 16
                }

            },

            messages:{

                name:{
                    required: "Это поле обязательно для заполнения",
                    minlength: "Логин должен быть минимум 4 символа",
                    maxlength: "Максимальное число символо - 16"
                },

                phone_number:{
                    required: "Это поле обязательно для заполнения",
                    minlength: "Пароль должен быть минимум 6 символа",
                    maxlength: "Пароль должен быть максимум 16 символов"
                },

                question:{
                    required: "Это поле обязательно для заполнения",
                    minlength: "Пароль должен быть минимум 6 символа",
                    maxlength: "Пароль должен быть максимум 16 символов"
                }

            }

         });
    });
    //var jsonForAjax = $(this).serialize();
    //$.post( "", jsonForAjax);
});