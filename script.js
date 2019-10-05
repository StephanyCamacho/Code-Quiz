//timer counting down time left on quiz
var timeEl = document.querySelector(".Time");
var questionsEl = document.querySelector(".questions-rendered");

var secondsLeft = 75;
var timerInterval;

function setTime(){
    timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "TIME REMAINING: " + secondsLeft;
        if(secondsLeft === 0){
            clearInterval(timerInterval);
            // consider you will need to invoke another function here later (endGame() .. hint hint)
        }
    }, 1000);
}

// on click of start button display timer and first question
const startBtn = document.getElementById("startquiz");
startBtn.addEventListener('click', function() {
  setTime();
      // console.log(this);
  startBtn.style.display = 'none';
  // moved this call up here so that the first question is only rendered once the player
 // clicks "Start Quiz"
    displayQuestions();
})
// when user clicks answer, 
// setting up 'questionIndex' to act as a pointer to the current index in the questions array;
// this acts like the 'var i' inside a for loop, but will be manually incremented to allow
// the code to trigger the next question only when the previous question is answered
var questionIndex = 0;
// function to display the current question/answers
 function displayQuestions(){
     // clearing out the HTML from the previous question, to clear the slate for the current one
     // shortcut variable to an individual question (the current question)
    questionsEl.textContent = "";
    // variable to hold a reference to the current question; it is pulled from the questions
    // array based on the current value of the 'questionIndex' variable
    var question = questions[questionIndex]; 

   // wrapper div to hold the question and all of its answers, will later be inserted into the HTML
   var questionDiv = document.createElement("div");


    // creating paragraph to hold the question text itself, storing it inside the variable 
    var questionText = document.createElement("p");
    // pulling the question text from the question object, setting it as text of the paragraph
    questionText.textContent = question.title; 
    // adding the paragraph (containing the question text) to the wrapper div
    questionDiv.appendChild(questionText)

    // looping through each of the answers in the current question's choices array
    for (i = 0; i < question.choices.length; i++) {
        // for each answer, all of the below steps happen:

        // creating a new button element and store it in the 'answer' variable
        var answer = document.createElement("button");
        // storing the text of the current answer inside the newly-created button
        answer.textContent = question.choices[i];
        // adding a class of 'answer' to each button (to make wiring up a click event more straightforward)
        answer.setAttribute("class", "answer");
        // adding a click event for the newly-created button
        answer.addEventListener("click", function() {
            alert("clicked on an answer");
            // YOUR LOGIC GOES HERE:
                // 1) get the answer the user clicked on and compare it to the correct answer
                // 2) likely add to correct/incorrect counters
                // 3) increment 'questionIndex', to change pointer to next question
                // 4) call 'displayQuestions' function, which will then render the next question
                // 5) potentially reset timer? (or is timer for all questions?)
                // 6) consider moving this functionality into a separate function, maybe?
        })
        // then adding the new button (containing the answer text) to the wrapper div
        questionDiv.appendChild(answer);
    }

    // by the time you reach this point in the code, you now have a question wrapper div
    // ('questionDiv') that contains a paragraph containing the question, and four buttons
    // containing the answers...

    // the next step is putting the wrapper div on the page!
    questionsEl.appendChild(questionDiv);
}
// grab value of selectd answer
// compare with correct answer from 'questions' array
// if same then display 'Correct!'
// else display 'Wrong`
// if 'Wrong' ... subtract 10 from alotted time
// increase index by 1 (i.e. next question)
// quiz displays next question  (could be as easy as just setting text content of div to current question/answers)
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