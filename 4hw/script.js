//Allows questions to be quickly accessed from local storage
var questions = JSON.parse(localStorage.getItem("questions"));
console.log(questions);//keeping this for testing just in case but don't forget

//Vars to access the center card through dom
var header = document.getElementById('top');
var center = document.getElementById('center');
var footer = document.getElementById('bottom');
var hanger = document.getElementById('hanger')
//Var to Store Question Number
var qNum=0

//Code for button to start quiz
var startB = document.getElementById('start');
startB.addEventListener("click",function(){
    qNum=0
    renderQuestion();
});

//Function to display quiz in center card
function renderQuestion(){
header.textContent = questions[qNum].title;
center.style.display = "none"
renderChoices();
};

//Function to Display answers as buttons-
function renderChoices(){
    for(i=0; i<questions[qNum].choices.length;i++){
        var ansL = document.createElement("li")
        var ansB = document.createElement("button");
        ansB.setAttribute("class","btn btn-primary");
        ansB.setAttribute("data-index-number", i);
        ansB.setAttribute("id", "answer");
        ansB.innerHTML = questions[qNum].choices[i];
        ansL.appendChild(ansB);
        hanger.appendChild(ansL);
    }

}