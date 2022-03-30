//variables that link to the HTML
var scoresBtn =document.querySelector(".scores")
var timerEl= document.querySelector("#timer");
var startBtn = document.getElementById("start-quiz");
var submitBtn = document.querySelector ("#submit");
var questionsEl = document.querySelector("#questions");
var correctAnswer= document.querySelector("#answers");
var qtitle = document.getElementById('question-title');
var initialsEl = document.getElementById ("initials");
var btn1 = document.getElementById ("btn-1");
var btn2 = document.getElementById ("btn-2");
var btn3= document.getElementById ("btn-3");
var btn4= document.getElementById ("btn-4");
var alert= document.getElementById("response");
var timerSec= 50;
var currentQuestionIndex =0;
var timerId;
var nxtQuestion =questionsArr[currentQuestionIndex];

//This function starts the quiz and the timer
function startQuiz (){
  var startScreenEl = document.getElementById("start-screen");
startScreenEl.setAttribute("class", "hide");
timerId =setInterval(function countdown() {
  timerSec--;
  if(timerSec < 0) {
      clearInterval(timerId);
      timerEl.textContent = "Quiz Over!";
  }
  else{
    questionsEl.setAttribute("class","show")
    timerEl.textContent= timerSec
  }
  }, 1000)

  getQuestion();
}   

//this function shows the first question
function getQuestion (){
    var currentQuestion = questionsArr[currentQuestionIndex];
    qtitle.textContent =currentQuestion.title;
    btn1.textContent = currentQuestion.choices[0]
    btn2.textContent = currentQuestion.choices[1]
    btn3.textContent = currentQuestion.choices[2]
    btn4.textContent = currentQuestion.choices[3]
//the answers are clickable buttons
    btn1.addEventListener("click", nextQuestion);
    btn2.addEventListener("click", nextQuestion);
    btn3.addEventListener("click", nextQuestion);
    btn4.addEventListener("click", nextQuestion);   

}
//funtion to go through the rest of the questions
function nextQuestion (e){
  currentQuestionIndex++
  if (currentQuestionIndex < questionsArr.length){
    console.log(currentQuestionIndex)
    corAnswer(e.target.innerText == nxtQuestion.answer)
    correctAnswer.textContent=" "}

    if (currentQuestionIndex < questionsArr.length) {
        nxtQuestion=questionsArr[currentQuestionIndex]
        getQuestion(nxtQuestion)
    }else if (currentQuestionIndex < 0){
      getQuestion(nxtQuestion)
    } else {
    quizEnd()
  }
}

//function to display correct or incorrect after question is answered and takes away -5 seconds if you hit the incorrect answer
function corAnswer(response) {
  if (response){
    console.log (response)
    alert.textContent="Correct!"
  }else {
    alert.textContent="Incorrect!"
    timerSec= timerSec -5
    timerEl.innerHTML =timerSec
  }

setTimeout (function(){
 alert.textContent= " "

} , 500)

}

//goes to the score page and displays box for initials
function quizEnd() {
clearInterval(timerId);

var endScreenEl = document.getElementById("finished-page");
endScreenEl.setAttribute("class", "show");

 var finalScoreEl = document.getElementById("final-score");
 finalScoreEl.textContent = timerSec;

 questionsEl.setAttribute("class", "hide");
}

//stops the clock when it gets to the last page
function clockTick() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}

//saves the high scores into the local storage 
function saveHighscore() {
  var initials = initialsEl.value.trim();
  if (initials !== "") {
    var highscores =
      JSON.parse(localStorage.getItem("highscores")) || [];
    var newScore = {
      score: timerSec,
      initials: initials
    };
    highscores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    renderHighScore ()
  }
  }
  
  //this function displays the scores on the screen when you hit submit
  function renderHighScore(){
    var startScreenEl = document.getElementById("start-screen");
      startScreenEl.setAttribute("class", "hide") 
    var endScreenEl = document.getElementById("finished-page");
      endScreenEl.setAttribute("class", "hide");
    var highScoreList= document.createElement("ul");
    var highScoreEl =document.getElementById("highScores");
      highScoreEl.setAttribute("class", "show");
    var highScoresArr=JSON.parse(localStorage.getItem("highscores")) || [];
    console.log(highScoresArr)
    for (let index = 0; index < highScoresArr.length; index++) {
      var highScore = highScoresArr[index];
      var listItem= document.createElement("li");
      listItem.textContent= `${highScore.initials} - ${highScore.score}`; 
      highScoreList.append(listItem)
    }

    highScoreEl.append(highScoreList)
   }

var goBackBtn= document.getElementById("go-back")
//button to go back to the start of the quiz
goBackBtn.addEventListener("click", function () {
  var highScoreEl =document.getElementById("highScores");
highScoreEl.setAttribute("class", "hide");
  var startScreenEl = document.getElementById("start-screen");
startScreenEl.setAttribute("class", "show");

})




//buttons throughout the pages
scoresBtn.addEventListener("click", renderHighScore);
startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", saveHighscore);
    




//psudocode 

// HTML

// 1. Start screen with title, rules, start button, timer
// 2. Question screen container with question text, buttons, timer, feedback based on answer selected
// 3. End of game container with final score, form to enter initials, and a submit button
// 4. High score page 


// JS

// 1. Declare variables to reference DOM elements in your HTML document

//     - StartQuizBtn, StartScreenEl, timerEl, highScoreEl
//     - QuestionEl, questionTitleEl, answerChoicesEl


// 2. Create an array of objects that hold all question -- can store this in a separate JS file
//     - Answer choices
//     - Question text
//     - Correct answer

// 3. Create a startQuiz() function trigerred by the StartQuizBtn
//     -Hide start screen
//     -Unhide questions screen
//     -Starts timer
//     -Grab first question in the array

// 4. Create a function to getQuestion()
//     - Renders title, choices and buttons

// 5. Create a function to check if an answer is correctly
//     -If the answer is correct, then move on to the next question
//     -If answer is wrong, decrement timer and move on to next question
//     -Keep track of score/points
//     -Increment index in array of questions to move on

// 6. Create a function to end the quiz
//     -Hide this QuestionEl
//     -Unhide the End of quiz element
//     -Unhide your final score element, form, submit btn

// 7. Create functionality to save high scores to localStorage

// Acceptance Criteria
// - Presented with a Start button that renders a question when clicked
// - Timer is triggered by Start button
// - Rendered question has incorrect options and one correct option
// - If you click the correct option, then points are added and the next question is rendered. The timer continues moving
// - If you click an incorrect option, then the timer decreases by a certain amount as a penalty and no points are added.
// - When you run out of questions, or when you run out of time, the game ends and a game over screen renders.
// - On the game over screen, you can save your intials and score
