/*(function() {
    var questions = [{
      question: "Чтобы я хорошо учил предмет, мне должен нравиться учитель.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Мне очень нравится учиться, расширять свои знания о мире.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Общаться с друзьями, с компанией в школе гораздо интереснее, чем сидеть на уроках, учиться.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Для меня совсем немаловажно получить хорошую оценку.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Все, что я делаю, я делаю хорошо – это моя позиция.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Знания помогают развить ум, сообразительность, смекалку.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Если ты школьник, то обязан учиться хорошо.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Если на уроке царит обстановка недоброжелательности, излишней строгости, у меня пропадает всякое желание учиться.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Я испытываю интерес только к отдельным предметам.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Считаю, что успех в учебе – немаловажная основа для уважения и признания среди одноклассников.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Приходится учиться, чтобы избежать надоевших нравоучений и разносов со стороны родителей и учителей.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Я испытываю чувство удовлетворения, подъема, когда сам решу трудную задачу, хорошо выучу правило и т. д.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Хочу знать как можно больше, чтобы стать интересным, культурным человеком.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Хорошо учиться, не пропускать уроки – моя гражданская обязанность на данном этапе моей жизни.",
      choices: [0, 1, 2, 3]
    }, {
      question: "На уроке не люблю болтать и отвлекаться, потому что для меня очень важно понять объяснение учителя, правильно ответить на его вопросы.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Мне очень нравится, если на уроке организуют совместную с ребятами работу (в паре, бригаде, команде).",
      choices: [0, 1, 2, 3]
    }, {
      question: "Я очень чувствителен к похвале учителя, родителей за мои школьные успехи.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Учусь хорошо, так как всегда стремлюсь быть в числе лучших.",
      choices: [0, 1, 2, 3]
    }, {
      question: "Я много читаю книг, кроме учебников (по истории, спорту, природе и т. д.).",
      choices: [0, 1, 2, 3]
    }, {
      question: "Учеба в моем возрасте – самое главное дело.",
      choices: [0, 1, 2, 3]
    }, {
      question: "В школе весело, интереснее, чем дома, во дворе.",
      choices: [0, 1, 2, 3]
    }];

    var Answ = [0,0,0,0,0,0,0];
    var score = $('<h2>',{id: 'question'});
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    
    // Display initial question
    displayNext();
    
    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      // Suspend click listener during fade animation
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // If no user selection, progress is stopped
      if (isNaN(selections[questionCounter])) {
        swal({
          title:"Выберите вариант ответа" , 
          icon: "warning",
         });
        
      }
      else {
        questionCounter++;
        displayNext();
      }
    });
    
    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      $('#sendform').hide();
      $('#next').show();
      choose();
      questionCounter--;
      displayNext();
    });
    
    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      $('#sendform input').val('');
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });
    
    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
      var qElement = $('<div>', {id: 'question'});
      
      var header = $('<h2>Утверждение ' + (index + 1) + ' из 21</h2>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    
    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Controls display of 'prev' button
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            $('#next').show();
            $('#prev').hide();
          } else if (questionCounter === 2){
            $('#sendform').show();
            $('#next').hide();
          }
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#sendform').hide();
          $('#start').show();
        }
      });
    }
        // Computes score and returns a paragraph element to be displayed
        function displayScore() {
          
          for (var i = 0; i < selections.length; i++) {
            if (i == 1 || i == 8 || i == 14) {
            Answ[0] += selections[i];
            }
            else if (i == 2 || i == 9 || i == 15) {
            Answ[1] += selections[i];
            }
            else if (i == 0 || i == 7 || i == 20) {
            Answ[2] += selections[i];
            }
            else if (i == 5 || i == 12 || i == 18) {
            Answ[3] += selections[i];
            }
            else if (i == 6 || i == 13 || i == 19) {
            Answ[4] += selections[i];
            }
            else if (i == 4 || i == 11 || i == 17) {
            Answ[5] += selections[i];
            }
            else if (i == 3 || i == 10 || i == 16) {
            Answ[6] += selections[i];
            }
          }
    
          score.append('Познавательные мотивы ' + $('<p>', {id: 'result'}) + Answ[0] + '<br>Коммуникативные ' + Answ[1] + '<br>Эмоциональные ' + Answ[2] + '<br>Саморазвития ' + Answ[3] + '<br>Позиция школьника ' + Answ[4] + '<br>Мотивы достижения ' + Answ[5] + '<br>Внешние мотивы (поощрения, наказания) ' + Answ[6] );
          return score;
        }
 
})();*/

$(".click").click(function () {
    $(".row").css("display", "none");
    $("#container").css("display","block");
});
$(".closeicn2").click(function(){
  $(".row").css("display", "block");
  $("#container").css("display","none");
});


$( ".input" ).focusin(function() {
  $( this ).find( ".icn" ).animate({"opacity":"0"}, 200);
});

$( ".input" ).focusout(function() {
  $( this ).find( ".icn" ).animate({"opacity":"1"}, 300);
});