// general variables
let totalScore = 0;

let main = document.body.children[1];
let startBtn = document.querySelector("#start-quiz");

let timeLeft = document.querySelector("#time-left");
let secondsLeft = 45;

// click start button to start quiz and timer
startBtn.addEventListener("click", function () {
  setTime();
  showQuestion1();
});

// timer
function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
// lose time for wrong answer
function loseTime() {
  if (secondsLeft >= 10) {
    secondsLeft = secondsLeft - 10;
    timeLeft.textContent = secondsLeft;
  }
}

//calculate score
function addPoint() {
  totalScore++;
}
function losePoint() {
  if (totalScore > 0) {
    totalScore--;
  }
}

// question 1
function showQuestion1() {
  // clear prev
  main.innerHTML = "";

  // create new question
  let question1 = document.createElement("div");
  question1.classList.add("card");

  let question1Text = document.createElement("h2");
  question1Text.textContent = "Which Chaos God did the Aeldar directly create?";

  let answers1 = document.createElement("ul");
  answers1.setAttribute("style", "list-style: none");

  main.appendChild(question1);
  question1.appendChild(question1Text);
  question1.appendChild(answers1);

  // for loop to create all answers + update timer / score depending
  let answers1All = ["Khorne", "Tzeentch", "Nurgle", "Slaanesh"];
  for (var i = 0; i < answers1All.length; i++) {
    let answerChoice = document.createElement("li");
    answerChoice.classList.add("btn");
    answerChoice.textContent = answers1All[i];
    answers1.appendChild(answerChoice);
    answerChoice.addEventListener("click", function (event) {
      if (event.currentTarget.textContent === "Slaanesh") {
        addPoint();
      } else {
        losePoint();
        loseTime();
      }
    });
  }
}
