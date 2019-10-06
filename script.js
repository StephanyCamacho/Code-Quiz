var timeEl = document.querySelector(".Time");
var questionsEl = document.querySelector(".questions-rendered");
var scoreEl = document.querySelector(".Score");
var highScoreEl = document.querySelector(".highScore");
var submitButton = document.querySelector("#submit");

var secondsLeft = 76;
var timerInterval;

document.querySelector('.Score').style.display='none';

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
    document.querySelector('.splashPage').style.display='none';
    displayQuestions(questionIndex);
})

var questionIndex = 0;

function displayQuestions(){
    questionsEl.textContent = "";
    var question = questions[questionIndex];
    var questionDiv = document.createElement("div");
    var questionText = document.createElement("h2");
    questionText.textContent = question.title;
    questionDiv.appendChild(questionText)
    
    for (var i=0; i < question.choices.length ;i++) {
        var option = document.createElement("button");
        option.textContent = question.choices[i];
        option.setAttribute("class", "option");
        option.addEventListener("click", function(e) {
            var optionClicked = (e.target.innerHTML);
            if(optionClicked === questions[questionIndex].answer){
                alert("Correct!");
                displayQuestions(questionIndex++);
            }
            else{
                alert("Incorrect!");
                displayQuestions(questionIndex++);
                secondsLeft -= 10;
            }
            if (questionIndex === questions.length - 1) {
                document.querySelector('.Score').style.display='block';
                document.querySelector('.Time').style.display='none';
                highScoreEl.textContent = "YOUR SCORE IS " + secondsLeft;
              } 
        })
        questionDiv.appendChild(option);
    }
    questionsEl.appendChild(questionDiv);
}

// function renderLastRegistered() {
//     var initials = localStorage.getItem("initials");
//     if (initials === null) {
//       return;
//     }

// submitButton.addEventListener("click", function(event){
//     event.preventDefault();

//     var enterInitials = document.querySelector("#initials").value;
    
//     if (enterInitials === "") {
//     alert("Error", "initials cannot be blank!");
//     }
//     else {
//         localStorage.setItem("initials", initials);
//         renderLastRegistered();
//       }
// }
