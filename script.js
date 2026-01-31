const questions = [
  {
    question: "What does 'rizz' mean?",
    options: ["Charm", "Food", "Dance"],
    points: [20, 0, 0]
  },
  {
    question: "Fav platform?",
    options: ["Instagram", "YouTube", "Facebook"],
    points: [20, 20, 0]
  },
  {
    question: "How often online?",
    options: ["24/7", "Few hours", "Rarely"],
    points: [20, 10, 0]
  },
  {
    question: "Use short forms?",
    options: ["Always", "Sometimes", "Never"],
    points: [20, 10, 0]
  },
  {
    question: "Voice notes or text?",
    options: ["Voice", "Text", "Calls"],
    points: [10, 20, 0]
  }
];

let currentQ = 0;
let score = 0;

function startQuiz() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQ];
  document.getElementById("progress").innerText =
    `Question ${currentQ + 1} of ${questions.length}`;
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  document.getElementById("nextBtn").disabled = true;

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerText = opt;
    btn.onclick = () => selectOption(index);
    optionsDiv.appendChild(btn);
  });
}

function selectOption(index) {
  score += questions[currentQ].points[index];
  document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
  currentQ++;
  if (currentQ < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  let title = "";

  if (score <= 20) title = "Not Gen Z";
  else if (score <= 50) title = "Maybe Gen Z";
  else if (score <= 80) title = "Half Gen Z";
  else title = "Full Gen Z 🔥";

  document.getElementById("resultTitle").innerText = title;
  document.getElementById("scoreText").innerText = `Score: ${score}/100`;
}
