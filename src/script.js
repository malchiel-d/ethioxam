//questions
const quizData = [
  {
    question: "KEY: LOCK; ________ : Computer",
    choices: { a: "Monitor", b: "Password", c: "Server", d: "Screen" },
    correct: "b"
  },
  {
    question: "PHYSICIAN: HOSPITAL; ________ : School",
    choices: { a: "Supervisor", b: "Teacher", c: "Administrator", d: "Student" },
    correct: "b"
  },
  {
    question: "NEST: BIRD; ________ : Lion",
    choices: { a: "Hive", b: "Cave", c: "Backyard", d: "Den" },
    correct: "d"
  },
  {
    question: "AUTOMOBILE: GARAGE; ________ : Hangar",
    choices: { a: "Train", b: "Airplane", c: "Deck", d: "Truck" },
    correct: "b"
  },
  {
    question: "PHONEY",
    choices: { a: "Genuine", b: "Authentic", c: "Fake", d: "Funny" },
    correct: "c"
  },
  {
    question: "THEFT",
    choices: { a: "Gossip", b: "Suspicion", c: "Burglary", d: "Hypocrisy" },
    correct: "c"
  },
  {
    question: "HUMOROUS",
    choices: { a: "Amusing", b: "Doubting", c: "Satiating", d: "Satisfying" },
    correct: "a"
  }
];

//saving user answers 
     //null,null,null
let currentQuestionIndex = 0;
let userAnswers = Array(quizData.length).fill(null);

const quizWrapper = document.querySelector('#quiz-wrapper');
const endScreen = document.querySelector('#endScreen');
const form = document.querySelector("#quizForm");
const clearBtn = document.querySelector('#clearBtn');
const submitButton = document.querySelector('.btn-submit');

//start-btn
document.querySelector('#start-btn').addEventListener("click", startExam);

function startExam() {
  let startBtn = document.querySelector('#start-btn');
  let quizWrapper = document.querySelector('.quiz-wrapper');
  startBtn.style.display = "none";
  quizWrapper.style.display = "block";
  render();
}

function render() {
  let currentQuestion = quizData[currentQuestionIndex];
  let savedAnswer = userAnswers[currentQuestionIndex];

  //clear inputs 
  document.querySelectorAll('#quizForm input').forEach(i => i.checked = false);

  //fill inputs
  if (savedAnswer !== null) {
    let matchedRadio = document.querySelector(`input[value="${savedAnswer}"]`);
    if (matchedRadio) matchedRadio.checked = true;
    displaySubmit();
    displayClearBtn();
  }

  //adding quiz data to screen
  let questionHtml = document.querySelector('.quiz-wrapper #questionDiv');
  let choiceHtml = document.querySelectorAll('.option-label');

  //add question
  questionHtml.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  //add the choioces
  Object.values(currentQuestion.choices).forEach((choice, index) => {
    choiceHtml[index].textContent = String.fromCharCode(97 + index) + ". " + choice;
  });
}

//next and prev btn    
document.querySelector('#nextBtn').addEventListener("click", next);
document.querySelector('#previousBtn').addEventListener("click", previous);

function next() {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    render();
    displayClearBtn();
  };
}

function previous() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    render();
    displayClearBtn();
  };
}

//add answers from the form 
form.addEventListener("change", function(event) {
  userAnswers[currentQuestionIndex] = event.target.value;
  displaySubmit();
  displayClearBtn();
});

//clear-button   
function displayClearBtn() {
  if (userAnswers[currentQuestionIndex] !== null) {
    clearBtn.style.display = "block";
  } else {
    clearBtn.style.display = "none";
  }
}

clearBtn.onclick = e => {
  e.preventDefault();
  document.querySelectorAll('#quizForm input').forEach(i => i.checked = false);
  userAnswers[currentQuestionIndex] = null;
  displaySubmit();
  displayClearBtn();
};

// submit button 
//diaplaying submit btn
function displaySubmit() {
  if (userAnswers.every(answer => answer !== null)) {
    submitButton.style.display = "block";
  } else {
    submitButton.style.display = "none";
  }
}

//submit btn clicked 
document.querySelector("#submitBtn").addEventListener("click", submitAnswer);

function submitAnswer() {
  if (!confirm("Are you sure you want to submit? You won't be able to change your answers.")) {
    return;
  }

  let score = 0;

  for (let i = 0; i < quizData.length; i++)
    if (userAnswers[i] === quizData[i].correct) {
      score++;
    }

  const percentage = Number(quizData.length ? ((score * 100 / quizData.length)).toFixed(2) : 0);
  let scoreSpan = document.querySelector('#scoreSpan');

  quizWrapper.style.display = "none";
  endScreen.style.display = "block";

  //score span
  scoreSpan.textContent = `${percentage}%`;
  if (percentage >= 50) {
    scoreSpan.style.color = "#4caf50";
  } else {
    scoreSpan.style.color = "#B00020";
  }
}

//restart btn
const restartBtn = document.querySelector('#restartBtn');
restartBtn.addEventListener("click", restartExam);

function restartExam() {
  //reset
  currentQuestionIndex = 0;
  userAnswers = Array(quizData.length).fill(null);
  //swap
  let startBtn = document.querySelector('#start-btn');
  startBtn.style.display = "block";
  endScreen.style.display = "none";
  //submit btn
  displaySubmit();
}
