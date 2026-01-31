// QUESTIONS
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");

const questions = [

  {
    question: "What does 'rizz' mean?",
    options: ["Money", "Charm", "Anger", "Nothing"],
    correct: 1
  },
  {
    question: "What is 'sus'?",
    options: ["Suspicious", "Cool", "Sad", "Happy"],
    correct: 0
  },
  {
    question: "What does 'no cap' mean?",
    options: ["No lie", "No hat", "No money", "No time"],
    correct: 0
  },
  {
    question: "What is 'mid'?",
    options: ["Average", "Amazing", "Fast", "Strong"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

// ELEMENTS
const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("nextBtn");

// LOAD QUESTION
function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  optionButtons.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.disabled = false;
    btn.style.background = "";
  });
}

// SELECT OPTION
optionButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const correctIndex = questions[currentQuestion].correct;

    if (index === correctIndex) {
      score += 20;
      btn.style.background = "green";
    } else {
      btn.style.background = "red";
    }

    optionButtons.forEach(b => b.disabled = true);
  });
});

// NEXT BUTTON
nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    // GO TO RESULT PAGE
    window.location.href = `result.html?score=${score}`;
  }
});

// START
loadQuestion();

