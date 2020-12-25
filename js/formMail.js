$("#sendMail").on("click", function(){
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var password = $('#password');
   

    if(email == ""){
        $("#errorMess").text("Введите Email");
        return false;
    }
    else if(name == ""){
        $("#errorMess").text("Введите имя");
        return false;
    }

    $("#errorMess").text("");

    $.ajax({
        url: './signup.php',
        type: 'POST',
        cache: false,
        data: {'name':name, 'email':email, 'password':password },
        dataType: 'html',
        beforeSend: function(){
            $("do_signup").prop("disabled", true);
        },
        success: function(data){
            if(!data)
            alert("Были ошибки, данные не отправлены!");
            else
            $("#mailForm").trigger("reset");
            $("do_signup").prop("disabled", false);
        }
    });
});