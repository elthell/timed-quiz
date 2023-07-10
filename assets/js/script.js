// general variables
let totalScore = 0

let main = document.body.children[1];
let startBtn = document.querySelector("#start-quiz");

// click start button to start quiz and timer
startBtn.addEventListener("click", function() {
    setTime();
    showQuestion1();
});

// timer
function setTime() {
    let timeLeft = document.querySelector("#time-left");
    let secondsLeft = 45;
    
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// question 1
function showQuestion1() {
    // create new question
    let question1 = document.createElement("div");
    question1.classList.add("card");

    let question1Text = document.createElement("h2");
    question1Text.textContent = "Which Chaos God did the Aeldar directly create?";

    let answers1 = document.createElement("ul");
    answers1.setAttribute("style", "list-style: none")
    
    // for loop to create all answers + update timer / score depending
    let answers1All = ["Khorne", "Tzeentch", "Nurgle", "Slaanesh"];
    for (var i = 0; i < answers1All.length; i++) {
        let answerChoice = document.createElement("li");
        answerChoice.classList.add("btn");
        answerChoice.textContent = answers1All[i];
        answers1.appendChild(answerChoice);
        answerChoice.addEventListener("click", function(event) {
            if (event.currentTarget.textContent === "Slaanesh") {
                console.log("yay");
            } else {
                console.log("ugh");
            }
        })
    }

    main.appendChild(question1);
    question1.appendChild(question1Text);
    question1.appendChild(answers1);
}