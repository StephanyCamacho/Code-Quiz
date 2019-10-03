var timeEl = document.querySelector(".Time");

var secondsLeft = 75;

function setTime(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "TIME REMAINING: " + secondsLeft;

        if(secondsLeft === 0){
            clearInterval(timerInterval);
        }

    }, 1000);
}

setTime();