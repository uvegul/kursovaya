$("#container").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

   
    var name = $("#name").val().trim();
    var klass = $("#klass").val();
    var form = $(this);
    var url = form.attr('action');
    var answer = [];
    for (var i=0; i<21;i++){
      answer[i] = $('input[name=answer'+i+']:checked').val();
    }
    var Poz = Number(answer[1]) + Number(answer[8])+ Number(answer[14]);
    var Kom = Number(answer[2]) + Number(answer[9])+ Number(answer[15]);
    var Em = Number(answer[0]) + Number(answer[7])+ Number(answer[20]);
    var Raz = Number(answer[5]) + Number(answer[12])+ Number(answer[18]);
    var Opi = Number(answer[6]) + Number(answer[13])+ Number(answer[19]);
    var Dos = Number(answer[4]) + Number(answer[11])+ Number(answer[17]);
    var Vne = Number(answer[3]) + Number(answer[10])+ Number(answer[16]);
    $.ajax({
      type: "POST",
      url: url,
      data: {'name':name, 'klass':klass, 'Poz':Poz, 'Kom':Kom, 'Em':Em, 'Raz':Raz, 'Opi':Opi, 'Dos':Dos, 'Vne':Vne}, // serializes the form's elements.
      success: function(data){
        $("#result").text(data);/*тут можно $().html */
      swal({
        title: data,
        icon: "success",
      }); // show response from the php script.
     }
    });
});