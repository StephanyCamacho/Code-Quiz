var timeEl = document.querySelector(".Time");
var questionsEl = document.querySelector(".questions-rendered");

var secondsLeft = 76;
var timerInterval;

function setTime(){
    timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "TIME REMAINING: " + secondsLeft;
        if(secondsLeft === 0){
            clearInterval(timerInterval);
        }
    }, 1000);
}

const startBtn = document.getElementById("startquiz");
startBtn.addEventListener('click', function() {
  setTime();

  startBtn.style.display = 'none';

    displayQuestions(questionIndex);
})

var questionIndex = 0;

 function displayQuestions(){
    questionsEl.textContent = "";

    var question = questions[questionIndex]; 
   var questionDiv = document.createElement("div");



    var questionText = document.createElement("p");

    questionText.textContent = question.title; 

    questionDiv.appendChild(questionText)


    for (var i=0; i < question.choices.length ;i++) {

        var option = document.createElement("button");

        option.textContent = question.choices[i];

        option.setAttribute("class", "option");

        option.addEventListener("click", function(e) {
            alert("clicked on an option");
               var optionClicked = (e.target.innerHTML);
               if(optionClicked === questions[questionIndex]
                .answer){
                    alert("correct");
                    displayQuestions(questionIndex++);
                }
                else{
                    alert("incorrect!!");
                    displayQuestions(questionIndex++);
                }
        })
        questionDiv.appendChild(option);
    }
    questionsEl.appendChild(questionDiv);
}

// (repeat until .....)
// either time === 0 OR if reached last index
// What has to be true for us to know we've reached the end of our array of questions?
// questions.length (5) and then last index is 4
// currentIndex++  (5)
// ... if (currentIndex  ===  questions.length) { endGame() };
// At end of game...
// display score view ('All Done!', score, and input field)

// if submit button is pressed, save initials/score to local storage
// take user to view highscores and get items from local storage

// If restart game -- all values will need to be reset to their original values