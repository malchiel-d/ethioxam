//used local storage so that reloading does not wipe all the data
/*
to make the answers flexible 
 - track answer instead of the score
 - convert saved answer 
 */

/*let currentQuestion = Number(localStorage.getItem("questionIndex")) || 0;
let userAnswers = JSON.parse(localStorage.getItem("savedAnswers")) || {};

function loadQuestion() {
    const activeQuestion = questions[currentQuestion];
    
    document.getElementById("q-text").innerText = activeQuestion.question;
    document.getElementById("btn-A").innerText = activeQuestion.options.A;
    document.getElementById("btn-B").innerText = activeQuestion.options.B;
    document.getElementById("btn-C").innerText = activeQuestion.options.C;
    document.getElementById("btn-D").innerText = activeQuestion.options.D;
}

function selectOption(choice) {
    userAnswers[currentQuestion] = choice;
    localStorage.setItem("savedAnswers", JSON.stringify(userAnswers));
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        localStorage.setItem("questionIndex", currentQuestion);
        loadQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        localStorage.setItem("questionIndex", currentQuestion);
        loadQuestion();
    }
}

function startExam() {
    loadQuestion();
}
*/