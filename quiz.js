const questions = [
  {
    question: "Do you use social media daily?",
    options: [
      { text: "Yes, all the time", points: 20 },
      { text: "Sometimes", points: 15 },
      { text: "Rarely", points: 5 },
      { text: "Never", points: 0 }
    ]
  },
  {
    question: "Which app do you open first?",
    options: [
      { text: "Instagram / YouTube", points: 20 },
      { text: "WhatsApp", points: 15 },
      { text: "Browser", points: 5 },
      { text: "None", points: 0 }
    ]
  },
  {
    question: "How do you talk to friends?",
    options: [
      { text: "Voice notes", points: 20 },
      { text: "Texts", points: 15 },
      { text: "Calls", points: 5 },
      { text: "In person only", points: 0 }
    ]
  },
  {
    question: "How often do you follow trends?",
    options: [
      { text: "Always", points: 20 },
      { text: "Sometimes", points: 15 },
      { text: "Rarely", points: 5 },
      { text: "Never", points: 0 }
    ]
  },
  {
    question: "Your relationship with tech?",
    options: [
      { text: "Love it", points: 20 },
      { text: "Need it", points: 15 },
      { text: "Okay", points: 5 },
      { text: "Avoid it", points: 0 }
    ]
  }
];

let current = 0;
let score = 0;
let selectedPoints = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");

function loadQuestion() {
  const q = questions[current];

  questionEl.textContent = q.question;
  progressEl.textContent = `Question ${current + 1} of ${questions.length}`;

  optionsEl.innerHTML = "";
  nextBtn.disabled = true;
  selectedPoints = null;

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.text;

    btn.onclick = () => {
      document.querySelectorAll(".option-btn")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
      selectedPoints = opt.points;
      nextBtn.disabled = false;
    };

    optionsEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  score += selectedPoints;
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("genzScore", score);
    window.location.href = "result.html";
  }
};

loadQuestion();
