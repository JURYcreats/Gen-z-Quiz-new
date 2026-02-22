diff --git a/result.js b/result.js
index 0c188388a0cc16caccd8308ba1d73328182f5838..ac4ccf343821b7d6a4fa51a390106136ee617f96 100644
--- a/result.js
+++ b/result.js
@@ -1,43 +1,54 @@
-const score = Number(localStorage.getItem("genzScore"));
+const rawScore = Number(localStorage.getItem("genzScore"));
+const rawMaxScore = Number(localStorage.getItem("genzMaxScore"));
+
+if (!Number.isFinite(rawScore) || !Number.isFinite(rawMaxScore) || rawMaxScore <= 0) {
+  window.location.href = "quiz.html";
+}
+
+const score = Number.isFinite(rawScore) ? rawScore : 0;
+const maxScore = Number.isFinite(rawMaxScore) && rawMaxScore > 0 ? rawMaxScore : 100;
+const scorePercent = (score / maxScore) * 100;
 
 const title = document.getElementById("resultTitle");
 const desc = document.getElementById("resultDesc");
 const scoreText = document.getElementById("scoreText");
 
-scoreText.textContent = `Score: ${score} / 100`;
+scoreText.textContent = `Score: ${score} / ${maxScore}`;
 
-if (score >= 80) {
+if (scorePercent >= 80) {
   title.textContent = "FULL GEN Z 🔥";
   desc.textContent = "You live online, speak fluent internet, and sleep is optional 💀";
-} else if (score >= 60) {
+} else if (scorePercent >= 60) {
   title.textContent = "HALF GEN Z 😎";
   desc.textContent = "You understand the vibe but still touch grass sometimes.";
-} else if (score >= 30) {
+} else if (scorePercent >= 30) {
   title.textContent = "MAYBE GEN Z 🤔";
   desc.textContent = "You know the trends but don’t always follow them.";
 } else {
   title.textContent = "NOT GEN Z 🧓";
   desc.textContent = "You prefer peace, offline life, and stable sleep schedules.";
 }
 
 function restartQuiz() {
   localStorage.removeItem("genzScore");
+  localStorage.removeItem("genzMaxScore");
   window.location.href = "quiz.html";
 }
+
 function shareWhatsApp() {
   const text = "I just checked if I'm Gen Z 😎🔥 Try it here:";
-  const url = window.location.href;
+  const url = window.location.origin + "/index.html";
   window.open(
     `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
     "_blank"
   );
 }
 
 function shareTwitter() {
   const text = "Are you really Gen Z? 👀🔥";
-  const url = window.location.href;
+  const url = window.location.origin + "/index.html";
   window.open(
     `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
     "_blank"
   );
 }
