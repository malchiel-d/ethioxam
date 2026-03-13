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

let currentQuestionIndex = 0;
    
function render(){
let currentQuestion =  quizData[currentQuestionIndex];

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
};   
    
//next and prev btn    
let nextBtn = document.querySelector('#nextBtn').addEventListener("click",next);
let previousBtn = document.querySelector('#previousBtn').addEventListener("click",previous);       
function next(){
if(currentQuestionIndex < quizData.length-1){
currentQuestionIndex++ ;
console.log(currentQuestionIndex);
render()
}; 
}   
function previous(){   
if(currentQuestionIndex > 0 ){
currentQuestionIndex-- ;
console.log(currentQuestionIndex);
render()
};
}
