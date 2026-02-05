const score = Number(localStorage.getItem("genzScore"));

const title = document.getElementById("resultTitle");
const desc = document.getElementById("resultDesc");
const scoreText = document.getElementById("scoreText");

scoreText.textContent = `Score: ${score} / 100`;

if (score >= 80) {
  title.textContent = "FULL GEN Z 🔥";
  desc.textContent = "You live online, speak fluent internet, and sleep is optional 💀";
} else if (score >= 60) {
  title.textContent = "HALF GEN Z 😎";
  desc.textContent = "You understand the vibe but still touch grass sometimes.";
} else if (score >= 30) {
  title.textContent = "MAYBE GEN Z 🤔";
  desc.textContent = "You know the trends but don’t always follow them.";
} else {
  title.textContent = "NOT GEN Z 🧓";
  desc.textContent = "You prefer peace, offline life, and stable sleep schedules.";
}

function restartQuiz() {
  localStorage.removeItem("genzScore");
  window.location.href = "quiz.html";
}
function shareWhatsApp() {
  const text = "I just checked if I'm Gen Z 😎🔥 Try it here:";
  const url = window.location.href;
  window.open(
    `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
    "_blank"
  );
}

function shareTwitter() {
  const text = "Are you really Gen Z? 👀🔥";
  const url = window.location.href;
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    "_blank"
  );
}
