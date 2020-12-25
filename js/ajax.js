$("#reg_form").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');

    if ($("#password").val() != $("#password_2").val())
    $("#errorMess").html("Пароли не совпадают!"),
    $("#password").css("background-color", "#fce4e4"),
    $("#password_2").css("background-color", "#fce4e4");
    else
    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(), // serializes the form's elements.
      success: function(data){
      document.getElementById("reg_form").reset();
      swal({
        title: data,
        icon: "success",
      }); // show response from the php script.
     }
    });
  });

