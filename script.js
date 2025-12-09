const questionPool = [
    {
        question: "What is the capital of Australia?",
        options:["Sydney","Canberra","Melbourne","Perth"],
        correctIndex: 1
    },
    {
        question: "Who wrote Romeo and Juliet?",
        options:["Charles Dickens","William Shakespeare","Mark Twain","Jane Austen"],
        correctIndex: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options:["Mars","Venus","Jupiter","Saturn"],
        correctIndex: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        options:["Atlantic Ocean","Indian Ocean","Pacific Ocean","Arctic Ocean"],
        correctIndex: 2
    },
    {
        question: "Which gas is most abundant in the Earth’s atmosphere?",
        options:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],
        correctIndex: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci","Pablo Picasso","Vincent van Gogh","Claude Monet"],
        correctIndex: 0
    },
    {
        question: "Which country invented paper?",
        options: ["India","China","Egypt","Greece"],
        correctIndex: 1
    },
    {
        question: "How many bones are in the adult human body?",
        options: ["198","206","220","250"],
        correctIndex: 1
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant","Giraffe","Blue whale","Rhinoceros"],
        correctIndex: 2
    },
    {
        question: "Which continent is the largest by area?",
        options: ["Africa","Asia","North America","Australia"],
        correctIndex: 1
    },
    {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C","95°C","100°C","110°C"],
    correctIndex: 2
},
{
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["China","Brazil","UK","Russia"],
    correctIndex: 1
},
{
    question: "What is the chemical symbol for gold?",
    options: ["Ag","Au","Gd","Go"],
    correctIndex: 1
},
{
    question: "Who discovered gravity?",
    options: ["Albert Einstein","Isaac Newton","Galileo Galilei","Nikola Tesla"],
    correctIndex: 1
},
{
    question: "Which is the longest river in the world?",
    options: ["Amazon","Nile","Yangtze","Mississippi"],
    correctIndex: 1
},
{
    question: "What is the currency of Japan?",
    options: ["Yen","Dollar","Won","Yuan"],
    correctIndex: 0
},
{
    question: "Which metal is liquid at room temperature?",
    options: ["Iron","Mercury","Sodium","Nickel"],
    correctIndex: 1
},
{
    question: "Which is the tallest mountain in the world?",
    options: ["K2","Kangchenjunga","Everest","Lhotse"],
    correctIndex: 2
},
{
    question: "Who is known as the Father of Computers?",
    options: ["Bill Gates","Charles Babbage","Alan Turing","Steve Jobs"],
    correctIndex: 1
},
{
    question: "Which organ purifies blood in the human body?",
    options: ["Heart","Liver","Kidney","Lungs"],
    correctIndex: 2
},
{
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["Germany","Italy","France","Spain"],
    correctIndex: 2
},
{
    question: "Which planet has the most moons?",
    options: ["Earth","Jupiter","Saturn","Uranus"],
    correctIndex: 2
},
{
    question: "What is the hardest natural substance?",
    options: ["Gold","Diamond","Iron","Quartz"],
    correctIndex: 1
},
{
    question: "How many players are on a football (soccer) team?",
    options: ["9","10","11","12"],
    correctIndex: 2
},
{
    question: "Which language has the most native speakers?",
    options: ["English","Spanish","Mandarin Chinese","Hindi"],
    correctIndex: 2
},
{
    question: "Which is the smallest continent?",
    options: ["Europe","Australia","South America","Antarctica"],
    correctIndex: 1
},
{
    question: "What is H₂O?",
    options: ["Hydrogen peroxide","Water","Oxygen","Salt"],
    correctIndex: 1
},
{
    question: "Which animal is known as the Ship of the Desert?",
    options: ["Horse","Camel","Donkey","Elephant"],
    correctIndex: 1
},
{
    question: "How many days are in a leap year?",
    options: ["364","365","366","367"],
    correctIndex: 2
},
{
    question: "Which is the fastest land animal?",
    options: ["Lion","Cheetah","Tiger","Panther"],
    correctIndex: 1
},
{
    question: "Where is the Great Pyramid of Giza located?",
    options: ["Mexico","India","Egypt","China"],
    correctIndex: 2
},
{
    question: "Which vitamin is produced when sunlight hits human skin?",
    options: ["Vitamin A","Vitamin C","Vitamin D","Vitamin K"],
    correctIndex: 2
},
{
    question: "Which is the largest desert in the world?",
    options: ["Sahara","Antarctic Desert","Arabian Desert","Gobi Desert"],
    correctIndex: 1
},
{
    question: "What is the square root of 144?",
    options: ["10","11","12","14"],
    correctIndex: 2
},
{
    question: "What is the national flower of Japan?",
    options: ["Rose","Tulip","Cherry blossom","Lotus"],
    correctIndex: 2
},
{
    question: "Which is the coldest place on Earth?",
    options: ["Greenland","Antarctica","Siberia","Alaska"],
    correctIndex: 1
},
{
    question: "Who was the first person to walk on the moon?",
    options: ["Buzz Aldrin","Yuri Gagarin","Neil Armstrong","Michael Collins"],
    correctIndex: 2
},
{
    question: "How many continents are there?",
    options: ["5","6","7","8"],
    correctIndex: 2
},
{
    question: "What is the chemical formula for table salt?",
    options: ["HCl","NaCl","CO₂","CaCO₃"],
    correctIndex: 1
},
{
    question: "Which is the largest island in the world?",
    options: ["Greenland","Madagascar","Borneo","New Guinea"],
    correctIndex: 0
},
{
    question: "What is the capital of Canada?",
    options: ["Toronto","Ottawa","Vancouver","Montreal"],
    correctIndex: 1
},
{
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Thailand","Japan","China","South Korea"],
    correctIndex: 1
},
{
    question: "Which organ pumps blood?",
    options: ["Brain","Liver","Heart","Lung"],
    correctIndex: 2
},
{
    question: "Which is the nearest star to Earth?",
    options: ["Alpha Centauri","Proxima Centauri","Sun","Sirius"],
    correctIndex: 2
},
{
    question: "What does FIFA stand for?",
    options: ["Federation of International Football Associations","Fédération Internationale de Football Association","Federation of Interworld Football Agencies","Federal International Football Alliance"],
    correctIndex: 1
},
{
    question: "Which is the biggest bird?",
    options: ["Eagle","Ostrich","Emu","Albatross"],
    correctIndex: 1
},
{
    question: "What is the freezing point of water?",
    options: ["0°C","5°C","10°C","-10°C"],
    correctIndex: 0
},
{
    question: "Who invented the telephone?",
    options: ["Thomas Edison","Alexander Graham Bell","Nikola Tesla","Guglielmo Marconi"],
    correctIndex: 1
},
{
    question: "Which planet is closest to the Sun?",
    options: ["Earth","Venus","Mercury","Mars"],
    correctIndex: 2
},
{
    question: "Which color has the longest wavelength?",
    options: ["Blue","Red","Green","Violet"],
    correctIndex: 1
}

]

let questions =[];
let currentIndex = 0;
let score = 0;
const totalQuestions = 10;

const quiz = document.getElementById("quiz");
const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const optionsListEl = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");
const scoreboardEl = document.getElementById("scoreboard");
const scoreMessageEl = document.getElementById("score-message");
const restartButton = document.getElementById("restart-button");

window.addEventListener("DOMContentLoaded",() =>{
    initializeQuiz();
})

function initializeQuiz(){
    questions = shuffleArray(questionPool).slice(0,totalQuestions);
    currentIndex = 0;
    score = 0;

    quiz.classList.remove("hidden");
    scoreboardEl.classList.add("hidden");

    displayQuestion();

}

function displayQuestion(){
    clearOptions();
    const currentQuestion = questions[currentIndex];
    questionNumberEl.textContent = `Question ${
        currentIndex + 1
    } of ${totalQuestions}`
    questionTextEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach((optionText, index) =>{
        const li= document.createElement("li");
        li.textContent = optionText;
        li.addEventListener("click", () => handleOptionClick(index));
        optionsListEl.appendChild(li);
    });

    if(currentIndex === totalQuestions-1){
        nextButton.textContent = "Finish";
    }else{
         nextButton.textContent="Next Question";
    }
    nextButton.disabled = true;
}

function handleOptionClick(selectedindex){
    const currentQuestion = questions[currentIndex];
    const correctIndex = currentQuestion.correctIndex;

    const optionsLi = optionsListEl.querySelectorAll("li");
    optionsLi.forEach((li,idx) => {
        if(idx === correctIndex){
            li.classList.add("correct-option");
        }
        if(idx === selectedindex && selectedindex !== correctIndex){
            li.classList.add("incorrect-option")
        }
        li.style.pointerEvents = "none"
    });

    if(selectedindex === correctIndex){
    score++;
    }

    nextButton.disabled = false;
}

function clearOptions() {
    optionsListEl.innerHTML = "";
}

nextButton.addEventListener("click", () => {
    currentIndex++;
    if(currentIndex < totalQuestions){
        displayQuestion();
    }else{
        endQuiz();
    }
});

function endQuiz(){
    quiz.classList.add("hidden");

    scoreboardEl.classList.remove("hidden");

    scoreMessageEl.textContent = `You scored ${score} out of ${totalQuestions}`;
}

restartButton.addEventListener("click", () => {
    initializeQuiz();
});

function shuffleArray(array){
    const arr = [...array];
    for(let i =arr.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [arr[i],arr[j]] = [arr[j],arr[i]];

    }
    return arr;
}