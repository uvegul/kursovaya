  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('signupform');

  signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });
  signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });
  
  $(document).ready(function () {
    $('.descr2, .descr3, .descr4, .descr5').hide();
    $('.open').click(function() {
      $('.descr1, .descr2, .descr3, .descr4, .descr5').hide();
      $('.descr' + $(this).attr('target')).show();
    });
  });
  $(".closeicn").click(function(){
    $("#zatemnenie").css("display","none");
  });
