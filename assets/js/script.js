// general variables
let totalScore = 0;

let main = document.body.children[1];
let startBtn = document.querySelector("#start-quiz");

let timeLeft = document.querySelector("#time-left");
let secondsLeft = 45;

let feedback = document.querySelector("#feedback");

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

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      showSubmit();
    }
  }, 1000);
}
// lose time for wrong answer
function loseTime() {
  if (secondsLeft > 10) {
    secondsLeft = secondsLeft - 10;
    timeLeft.textContent = secondsLeft;
  } else {
    secondsLeft = 0;
    timeLeft.textContent = secondsLeft;
    showSubmit();
  }
}

//add points for right answers
function addPoint() {
  totalScore++;
}

// add feedback depending on right / wrong answer
function rightAnswer() {
  feedback.textContent = "Correct! Nice job";
}
function wrongAnswer() {
  feedback.textContent = "Oops! Wrong answer";
}

// question 1
function showQuestion1() {
  // clear prev
  main.innerHTML = "";

  // create new card and attach to main
  let questionCard = document.createElement("div");
  questionCard.classList.add("card");
  main.appendChild(questionCard);

  // create question text and attach to card
  let questionText = document.createElement("h2");
  questionText.textContent = "Which Chaos God did the Aeldar directly create?";
  questionCard.appendChild(questionText);

  // create answer ul and attach to card
  let answerList = document.createElement("ul");
  answerList.setAttribute("style", "list-style: none");
  questionCard.appendChild(answerList);

  // for loop to create all answers + update timer / score / feedback + trigger next question
  let allAnswers = ["Khorne", "Tzeentch", "Nurgle", "Slaanesh"];
  for (var i = 0; i < allAnswers.length; i++) {
    let answerChoice = document.createElement("li");
    answerChoice.classList.add("btn");
    answerChoice.textContent = allAnswers[i];
    answerList.appendChild(answerChoice);
    answerChoice.addEventListener("click", function (event) {
      if (event.currentTarget.textContent === "Slaanesh") {
        addPoint();
        rightAnswer();
      } else {
        wrongAnswer();
        loseTime();
      }
      showQuestion2();
    });
  }
}

// question 2
function showQuestion2() {
  main.innerHTML = "";

  let questionCard = document.createElement("div");
  questionCard.classList.add("card");
  main.appendChild(questionCard);

  let questionText = document.createElement("h2");
  questionText.textContent =
    "Which T'au commander leads the revolt against the Ethereal caste?";
  questionCard.appendChild(questionText);

  let answerList = document.createElement("ul");
  answerList.setAttribute("style", "list-style: none");
  questionCard.appendChild(answerList);

  let allAnswers = ["Shadowsun", "Farsight", "Brightsword", "Puretide"];
  for (var i = 0; i < allAnswers.length; i++) {
    let answerChoice = document.createElement("li");
    answerChoice.classList.add("btn");
    answerChoice.textContent = allAnswers[i];
    answerList.appendChild(answerChoice);
    answerChoice.addEventListener("click", function (event) {
      if (event.currentTarget.textContent === "Farsight") {
        addPoint();
        rightAnswer();
      } else {
        wrongAnswer();
        loseTime();
      }
      showQuestion3();
    });
  }
}

// question 3
function showQuestion3() {
  main.innerHTML = "";

  let questionCard = document.createElement("div");
  questionCard.classList.add("card");
  main.appendChild(questionCard);

  let questionText = document.createElement("h2");
  questionText.textContent = "Which Ork clan are the 'lucky blue gits'?";
  questionCard.appendChild(questionText);

  let answerList = document.createElement("ul");
  answerList.setAttribute("style", "list-style: none");
  questionCard.appendChild(answerList);

  let allAnswers = ["Goffs", "Bad Moons", "Deathskulls", "Evil Sunz"];
  for (var i = 0; i < allAnswers.length; i++) {
    let answerChoice = document.createElement("li");
    answerChoice.classList.add("btn");
    answerChoice.textContent = allAnswers[i];
    answerList.appendChild(answerChoice);
    answerChoice.addEventListener("click", function (event) {
      if (event.currentTarget.textContent === "Deathskulls") {
        addPoint();
        rightAnswer();
      } else {
        wrongAnswer();
        loseTime();
      }
      showQuestion4();
    });
  }
}

// question 4
function showQuestion4() {
  main.innerHTML = "";

  let questionCard = document.createElement("div");
  questionCard.classList.add("card");
  main.appendChild(questionCard);

  let questionText = document.createElement("h2");
  questionText.textContent = "Who is the Primarch of the Space Wolves?";
  questionCard.appendChild(questionText);

  let answerList = document.createElement("ul");
  answerList.setAttribute("style", "list-style: none");
  questionCard.appendChild(answerList);

  let allAnswers = [
    "Horus Lupercal",
    "Rogal Dorn",
    "Jaghatai Khan",
    "Leman Russ",
  ];
  for (var i = 0; i < allAnswers.length; i++) {
    let answerChoice = document.createElement("li");
    answerChoice.classList.add("btn");
    answerChoice.textContent = allAnswers[i];
    answerList.appendChild(answerChoice);
    answerChoice.addEventListener("click", function (event) {
      if (event.currentTarget.textContent === "Leman Russ") {
        addPoint();
        rightAnswer();
      } else {
        wrongAnswer();
        loseTime();
      }
      showQuestion5();
    });
  }
}

// question 5
function showQuestion5() {
  main.innerHTML = "";

  let questionCard = document.createElement("div");
  questionCard.classList.add("card");
  main.appendChild(questionCard);

  let questionText = document.createElement("h2");
  questionText.textContent =
    "Which Tyranid Hive Fleet is invading from below the galactic plane?";
  questionCard.appendChild(questionText);

  let answerList = document.createElement("ul");
  answerList.setAttribute("style", "list-style: none");
  questionCard.appendChild(answerList);

  let allAnswers = ["Leviathan", "Hydra", "Behemoth", "Kraken"];
  for (var i = 0; i < allAnswers.length; i++) {
    let answerChoice = document.createElement("li");
    answerChoice.classList.add("btn");
    answerChoice.textContent = allAnswers[i];
    answerList.appendChild(answerChoice);
    answerChoice.addEventListener("click", function (event) {
      if (event.currentTarget.textContent === "Leviathan") {
        addPoint();
        rightAnswer();
      } else {
        wrongAnswer();
        loseTime();
      }
      showSubmit();
    });
  }
}

// submit screen
function showSubmit() {
  main.innerHTML = "";
  secondsLeft = 0;
  timeLeft.textContent = secondsLeft;

  let finalCard = document.createElement("div");
  finalCard.classList.add("card");
  finalCard.setAttribute("style", "display: flex; flex-direction: column; justify-content: center");
  main.appendChild(finalCard);

  let finalText = document.createElement("h2");
  finalText.textContent = "All done!";
  finalCard.appendChild(finalText);

  // display score from questions
  let finalScore = document.createElement("p");
  finalScore.textContent = "Your score is: " + totalScore + "/5";
  finalScore.setAttribute("style", "margin: 15px 0px")
  finalCard.appendChild(finalScore);

  // add name input + label
  let nameLabel = document.createElement("label");
  nameLabel.textContent = "Your name: ";
  nameLabel.setAttribute("for", "name");
  nameLabel.setAttribute("style", "font-weight: bold;")
  finalCard.appendChild(nameLabel);

  let nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("autocomplete", "off");
  nameInput.setAttribute("style", "font-size: 16px; padding: 5px;")
  nameInput.id = "name";
  finalCard.appendChild(nameInput);

  // button to submit name and score
  let submitFinal = document.createElement("button");
  submitFinal.classList.add("btn");
  submitFinal.setAttribute("style", "display: block");
  submitFinal.textContent = "Submit";
  submitFinal.id = "submit-quiz";
  finalCard.appendChild(submitFinal);

  // add submit event listener to store name to local storage
  submitFinal.addEventListener("click", function () {
    localStorage.setItem("name", nameInput.value);
  });
}

// high scores