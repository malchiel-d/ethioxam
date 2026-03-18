//questions
const quizData = [
{
question: "What is the capital of France?",
choices: { a: "Paris", b: "London", c: "Berlin", d: "Madrid" },
correct: "a"
},
{
question: "Which planet is known as the Red Planet?",
choices: { a: "Earth", b: "Mars", c: "Jupiter", d: "Venus" },
correct: "b"
},
{
question: "What is 5 + 7?",
choices: { a: "10", b: "11", c: "12", d: "13" },
correct: "c"
}
]
//saving user answers 
     //null,null,null
let userAnswers = Array(quizData.length).fill(null);
// submit button 
//diaplaying submit btn
function displaySubmit(){
const submitButton = document.querySelector('.btn-submit')
if (userAnswers.every(answer => answer !== null)) {
    submitButton.style.display = "block";
} else {
    submitButton.style.display = "none";
} 
}
//submit btn clicked 
document.querySelector("#submitBtn").addEventListener("click",submitAnswer);
function submitAnswer(){
alert("You have submitted your answers!");
quizWrapper.style.display = "none";
endScreen.style.display = "block";

let score = 0;
  
for(let i=0; i<quizData.length;i++)    
   if(userAnswers[i] === quizData[i].correct){
     score++
    }
const percentage = Number(quizData.length? ((score * 100 / quizData.length)).toFixed(2): "invalid denominator");  
let passOrFail;
     if(percentage>=50){
        passOrFail = "PASS"
    }
    else{
        passOrFail = "FAIL"
    }
    
console.log(`${passOrFail},you've scored ${score} out of ${quizData.length}(${percentage}%)`);

}
//add answers from the form 
const form = document.querySelector("#quizForm");

form.addEventListener("change", function(event) {
    userAnswers[currentQuestionIndex] = event.target.value;
    displaySubmit()
});
let currentQuestionIndex = 0;

function render(){
let currentQuestion =  quizData[currentQuestionIndex];   
let savedAnswer = userAnswers[currentQuestionIndex]; 
//clear inputs 
document.querySelectorAll('#quizForm input').forEach(i => i.checked = false);
    
//fill inputs
if(savedAnswer !== null){
let matchedRadio = document.querySelector(`input[value="${savedAnswer}"]`);
matchedRadio.checked = true;
displaySubmit()    
}

    
//adding quiz data to screen
let questionHtml = document.querySelector('.quiz-wrapper #questionDiv');
let choiceHtml = document.querySelectorAll('.option-label');     

//add question
questionHtml.textContent = `${currentQuestionIndex+1}. ${currentQuestion.question}`;
//add the choioces
Object.values(currentQuestion.choices).forEach((choice, index) => {
choiceHtml[index].textContent = String.fromCharCode(97 + index) + ". " + choice;
});
}

//start-btn
document.querySelector('#start-btn').addEventListener("click",startExam);
function startExam(){
let startBtn = document.querySelector('#start-btn');
let quizWrapper = document.querySelector('.quiz-wrapper');
startBtn.style.display = "none";
quizWrapper.style.display = "block";
render();
}
    
//clear-button   
document.querySelector('#clearBtn').onclick = e => {
e.preventDefault();
document.querySelectorAll('#quizForm input').forEach(i => i.checked = false);
userAnswers[currentQuestionIndex] = null;
displaySubmit(); 
};   
    
//next and prev btn    
let nextBtn = document.querySelector('#nextBtn').addEventListener("click",next);
let previousBtn = document.querySelector('#previousBtn').addEventListener("click",previous);       
function next(){
if(currentQuestionIndex < quizData.length-1){
currentQuestionIndex++ ;
render()
}; 
}   
function previous(){   
if(currentQuestionIndex > 0 ){
currentQuestionIndex-- ;
render()
};
}