//variables that link to the HTML
var timerEl= document.querySelector("#timer");
var startBtn = document.getElementById("start-quiz");
var submitBtn = document.querySelector ("#submit");
var questionsEl = document.querySelector("#questions");
var answerChoices= document.querySelector("#answers");
var correctAnswer= document.querySelector("#ansers");
var qtitle = document.getElementById('question-title');
var initialsEl = document.getElementById ("initials");
var btn1 = document.getElementById ("btn-1");
var btn2 = document.getElementById ("btn-2");
var btn3= document.getElementById ("btn-3");
var btn4= document.getElementById ("btn-4");

//console.log(qtitle);
// var feedbackEl= document.getElementById("feedback");

// console.log(wrapper)


var timerSec= 100;
var currentQuestionIndex =0;
var time =questions.length *15;
var timerId;



// var choices=[];

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

function getQuestion (){
    var currentQuestion = questions[currentQuestionIndex];
    console.log (currentQuestion);
    qtitle.textContent =currentQuestion.title;
    btn1.textContent = currentQuestion.choices[0]
    btn2.textContent = currentQuestion.choices[1]
    btn3.textContent = currentQuestion.choices[2]
    btn4.textContent = currentQuestion.choices[3]

    // onclick=allBtn.getElementsByClassName("question-title").innerHTML=currentQuestion;

    btn1.addEventListener("click", nextQuestion);
    btn2.addEventListener("click", nextQuestion);
    btn3.addEventListener("click", nextQuestion);
    btn4.addEventListener("click", nextQuestion);   

}

function nextQuestion (){
    qtitle.textContent =questions[1].title;
    btn1.textContent = questions[1].choices[0]
    btn2.textContent = questions[1].choices[1]
    btn3.textContent = questions[1].choices[2]
    btn4.textContent = questions[1].choices[3]

    btn1.addEventListener("click", quizEnd);
    btn2.addEventListener("click", quizEnd);
    btn3.addEventListener("click", quizEnd);
    btn4.addEventListener("click", quizEnd);
  // qtitle.textContent = questions[1]
//   if (correctAnswer){
//     console.log ("correct")
//   }
// for(var i=0; i = questions.length; i++)  {
//   console.log[questions.length];
  // qtitle.textContent=questions [i]
  // document.getElementById("question-title").innerHTML =currentQuestion;
//  console.log (currentQuestion)

}
// }


function quizEnd() {
//   // stop timer
clearInterval(timerId);

//   // show end screen
var endScreenEl = document.getElementById("finished-page");
endScreenEl.setAttribute("class", "show");

//   // show final score
 var finalScoreEl = document.getElementById("final-score");
 finalScoreEl.textContent = timerSec;

//   // hide questions section
 questionsEl.setAttribute("class", "hide");
}

// function clockTick() {
//   // update time
//   time--;
//   timerEl.textContent = time;

//   // check if user ran out of time
//   if (time <= 0) {
//     quizEnd();
//   }
// }




// function saveHighscore() {
//   // get value of input box
//   var initials = initialsEl.value.trim();

//   if (initials !== "") {
//     // get saved scores from localstorage, or if not any, set to empty array
//     var highscores =
//       JSON.parse(window.localStorage.getItem("highscores")) || [];

//     // format new score object for current user
//     var newScore = {
//       score: time,
//       initials: initials
//     };

//     // save to localstorage
//     highscores.push(newScore);
//     window.localStorage.setItem("highscores", JSON.stringify(highscores));

//     // redirect to next page
//     window.location.href = "score.html";
//   }
// }
//     if (this.value !== questions[currentQuestionIndex].answer) {
//       time-= 15;
//       if (time<0) {
//         time=0;
//       }
//     }
// }
    

// btn1.addEventListener ("click", function nextQuestion() {
// if (questions[currentQuestion].answer[0]==questions[currentQuestion].answer);
// console.log ("correct");
// })

// function checkAnswer (event) {
//   event.preventDefult ();
// console.log (event)

// }



//     btn1.textContent= questions[currentQuestion].choicesEL[0]
//     btn2.textContent= questions[currentQuestion].choicesEL[1]
//     btn3.textContent= questions[currentQuestion].choices[2]
//     btn4.textContent= questions[currentQuestion].choices[3]
// }


    // currentQuestion.choices.forEach(function(choice, i) {
    //   var choiceNode=document.createElement ("button");
    
    // choiceNode.setAttribute ("class","choice");
    // choiceNode.setAttribute("value", choice);
    // choiceNode.textContent = i + 1 + ". "+ choice;
    // choiceNode.onclick = questionClick;
    // choicesEl.appendChild(choiceNode);
    // });
  


//   function questionClick() {

//   if (this.value !== questions[currentQuestionIndex].answer) {
//     // penalize time
//     time -= 15;

//     if (time < 0) {
//       time = 0;
//     }
//     timerEl.textContent = time;
//     feedbackEl.textContent = "Wrong!";
//     feedbackEl.style.color = "red";
//     feedbackEl.style.fontSize = "400%";
//   } else {
//     feedbackEl.textContent = "Correct!";
//     feedbackEl.style.color = "green";
//     feedbackEl.style.fontSize = "400%";
//   }

//   // flash right/wrong feedback
//   feedbackEl.setAttribute("class", "feedback");
//   setTimeout(function() {
//     feedbackEl.setAttribute("class", "feedback hide");
//   }, 1000);

//   // next question
//   currentQuestionIndex++;

//   // time checker
//   if (currentQuestionIndex === questions.length) {
//     quizEnd();
//   } else {
//     getQuestion();
//   }
// }

// 

startBtn.addEventListener("click", startQuiz);
  
    // choicesEl.textContent = currentQuestion.choices;
    
    // questionsEl.textContent =
  
  
    
    // q = questions.join ("")
    // return q}

    // currentQuestion.innerHTML="";
    // // console.log ("currentQuestion")
    // var titleEL= document.getElementById("question-title");
    // console.log(titleEL)
    // titleEL.textContent = currentQuestion.title;
    // console.log("good")
    // choicesEl.innerHTML = "";
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