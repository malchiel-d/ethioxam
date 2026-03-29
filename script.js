//STATE: Variables to track the quiz progress
let currentSubject = null;
let currentQuestionIndex = 0;
let userAnswers = [];

//ELEMENTS
const startConfirm = document.querySelector('#startConfrmOverlay');
const startExamBtn = document.querySelector('.startExamBtn');
const quizWrapper = document.querySelector('#quiz-wrapper');
const endScreen = document.querySelector('#endScreen');
const home = document.querySelector('.home');
const form = document.querySelector("#quizForm");
const clearBtn = document.querySelector('#clearBtn');
const submitButton = document.querySelector('#submitBtn');
const scoreSpan = document.querySelector('#scoreSpan');
//Start Exam Logic
document.querySelectorAll('.btn-subject').forEach(btn => {
  btn.addEventListener("click", (e) => {
    currentSubject = e.target.id;
    
    // Check if we actually have questions for this subject
    if (quizData[currentSubject]) {
      // Update the confirmation box with the subject name and number of questions
      document.getElementById('subjectName').textContent = e.target.textContent.split(' -')[0];
      document.getElementById('numOfQs').textContent = quizData[currentSubject].length;
      
      // Show the overlay
      confirmStart(); 
    } else {
      alert("No questions found for " + currentSubject + " yet!");
    }
  });
});

//confirm start exam
function confirmStart(){
  startConfirm.style.display = "block";
}
startExamBtn.addEventListener("click", () => {
  startConfirm.style.display = "none";
  startExam();
});

function startExam() {
  currentQuestionIndex = 0;
  userAnswers = Array(quizData[currentSubject].length).fill(null);
  
  home.style.display = "none";
  endScreen.style.display = "none";
  quizWrapper.style.display = "block";
  render();
}

//Rendering Logic
function render() {
  const questions = quizData[currentSubject];
  const currentQuestion = questions[currentQuestionIndex];
  const savedAnswer = userAnswers[currentQuestionIndex];

  form.reset();

  document.querySelector('#questionDiv').textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  const labels = document.querySelectorAll('.option-label');
  const radios = document.querySelectorAll('input[name="answer"]');
  
  const choiceKeys = Object.keys(currentQuestion.choices); 
  choiceKeys.forEach((key, index) => {
    labels[index].textContent = `${key}. ${currentQuestion.choices[key]}`;
    radios[index].value = key;
    if (savedAnswer === key) radios[index].checked = true;
  });

  displayClearBtn();
  displaySubmit();
}

//Navigation & Answers
const nextBtn = document.querySelector('#nextBtn')
const prevBtn = document.querySelector('#previousBtn')
document.querySelector('#nextBtn').onclick = () => {
  if (currentQuestionIndex < quizData[currentSubject].length - 1) {
    currentQuestionIndex++;
    render();
  }
};

document.querySelector('#previousBtn').onclick = () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    render();
  }
};

form.onchange = (e) => {
  userAnswers[currentQuestionIndex] = e.target.value;
  displayClearBtn();
  displaySubmit();
};

function displayClearBtn() {
  clearBtn.style.display = userAnswers[currentQuestionIndex] !== null ? "block" : "none";
}

clearBtn.onclick = (e) => {
  e.preventDefault();
  form.reset();
  userAnswers[currentQuestionIndex] = null;
  displayClearBtn();
  displaySubmit();
};

function displaySubmit() {
  const isLast = currentQuestionIndex === quizData[currentSubject].length - 1;
  const allDone = userAnswers.every(ans => ans !== null);
  submitButton.style.display = (isLast && allDone) ? "block" : "none";
}

//Finish & Restart
submitButton.onclick = () => {
  if (!confirm("Are you sure to submit,you wont be able to change your answers.")) return;

  let score = 0;
  const questions = quizData[currentSubject];
  userAnswers.forEach((ans, i) => {
    if (ans === questions[i].correct) score++;
  });

  const percent = ((score / questions.length) * 100).toFixed(1);
  quizWrapper.style.display = "none";
  endScreen.style.display = "flex";
  scoreSpan.textContent = `${percent}% (${score}/${questions.length})`;
  scoreSpan.style.color = percent >= 50 ? "#4caf50" : "#B00020";
};

document.querySelector('#restartBtn').onclick = () => {
  endScreen.style.display = "none";
  home.style.display = "flex";
};
//back to home

// 1. Select the buttons
const quitQuizBtn = document.querySelector('#quitQuizBtn');
const backToHomeOverlay = document.querySelector('.startExamConfirm #backToHome');

// 2. Logic for quitting an ACTIVE quiz
quitQuizBtn.addEventListener("click", () => {
  const confirmQuit = confirm("Are you sure you want to quit? Your progress will be lost.");
  
  if (confirmQuit) {
    quizWrapper.style.display = "none";
    home.style.display = "flex";
    // Optional: reset quiz state
    currentSubject = null;
    userAnswers = [];
  }
});

// 3. Logic for closing the START confirmation overlay (no confirmation needed)
backToHomeOverlay.addEventListener("click", () => {
  startConfirm.style.display = "none";
  home.style.display = "flex";
});
