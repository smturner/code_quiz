//variables that link to the HTML
var scoresEl= document.querySelector(".scores");
var timerEl= document.querySelector(".timer-count");
var showTime= document.getElementById("timer");
var startBtn = document.getElementById("start-quiz");
var highScoreEl = document.getElementById("high-scores");
var questionsEl = document.querySelector("#questions");
var choicesEl= document.querySelector("#answerChoices");
var initalsEl= document.getElementById("initials");
var feedbackEl= document.getElementById("feedback");
//var startScreenEl= document.getElementById("start-screen");
// var startScreenEl = document.querySelector(".wrapper")
// console.log(wrapper)
var timerSec= 5;
var currentQuestionIndex =0;

startBtn.addEventListener("click", startQuiz);
// startBtn.addEventListener("click", function() {
   // alert("working");
    
// var timer =setInterval(function countdown() {
    // timerSec--;
    // if(timerSec < 0) {
    //     clearInterval(timer);
    //     timerEl.textContent = "Quiz Over!";
    // }
    // else{
    //     timerEl.textContent= "Timer: " + timerSec
    // }
       
    //     //console.log("Time is up");

    // }, 1000)


//})

function startQuiz (){
    var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.setAttribute("class", "display:block");

  //getQuestion();
}

function getQuestion (){
    var currentQuestion= questions[currentQuestionIndex];
    // console.log ("currentQuestion")
    var textEL= document.getElementById("question-text");
    textEL.textContent = currentQuestion.textEL;
    //choicesEl.innerHTML ="";
    // currentQuestion.answerChoices.forEach(function(choice, i) {
//     // create new button for each choice
//     var choiceNode = document.createElement("button");
//     choiceNode.setAttribute("class", "choice");
//     choiceNode.setAttribute("value", choice);

    // choiceNode.textContent = i + 1 + ". " + choice;

    // // attach click event listener to each choice
    // choiceNode.onclick = questionClick;

    // // display on the page
    // choicesEl.appendChild(choiceNode);
  }




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