//Adding Variables to reference DOM elements.
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// Sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

// Question start / Timer
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// My Functions 
// function startTimer() {
//     var timeInterval = setInterval(function () {
//     console.log("Timer");
//     time--;
//     countdownElement.textContent = time + " seconds until finished";
//         if(time === 0) {
//             clearInterval(timeInterval);
//             startQuiz();
//         }
//     }, 1000);
// };


function startQuiz() {
    console.log("Start");
    getQuestion();
};


function getQuestion() {
    console.log("Start");
};

function questionClick() {

};

function quizEnd() {

};

function clockTick() {

};

function saveHighscore() {

};

function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === "Enter") {
      saveHighscore();
    }
  }

function selectAndDisplayQuestion(){
    console.log("RandomQuestionArray", questions);
    var randomIndex = Math.floor(Math.random() * questions.length);
    console.log("RandomIndex", randomIndex);
    console.log("Element", questions[randomIndex]);
    questionsEl.textContent = questions[randomIndex].question + " - " + questions[randomIndex].answer;
};

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;