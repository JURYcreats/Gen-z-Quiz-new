diff --git a/script.js b/script.js
index d4b832cc188fd6da3885ce0a5b112c996e2acd66..b7359d9010385a50e4cb63fa794ba9c7d2796d32 100644
--- a/script.js
+++ b/script.js
@@ -21,78 +21,126 @@ const questions = [
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
+  },
+  {
+    question: "How fast do you reply to messages?",
+    options: [
+      { text: "Instantly", points: 20 },
+      { text: "Within an hour", points: 15 },
+      { text: "By end of day", points: 5 },
+      { text: "Whenever I remember", points: 0 }
+    ]
+  },
+  {
+    question: "How do you find new music?",
+    options: [
+      { text: "TikTok / Reels", points: 20 },
+      { text: "Spotify playlists", points: 15 },
+      { text: "Friends recommend", points: 5 },
+      { text: "I stick to old songs", points: 0 }
+    ]
+  },
+  {
+    question: "What are memes to you?",
+    options: [
+      { text: "Daily communication", points: 20 },
+      { text: "Fun content", points: 15 },
+      { text: "Occasional laughs", points: 5 },
+      { text: "I don’t get them", points: 0 }
+    ]
+  },
+  {
+    question: "How often do you shop online?",
+    options: [
+      { text: "All the time", points: 20 },
+      { text: "Monthly", points: 15 },
+      { text: "Rarely", points: 5 },
+      { text: "Never", points: 0 }
+    ]
+  },
+  {
+    question: "How do you learn new things?",
+    options: [
+      { text: "Short videos", points: 20 },
+      { text: "Online courses", points: 15 },
+      { text: "Books/articles", points: 5 },
+      { text: "Mostly offline classes", points: 0 }
+    ]
   }
 ];
 
+const maxScore = questions.length * 20;
+
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
+    localStorage.setItem("genzMaxScore", maxScore);
     window.location.href = "result.html";
   }
 };
 
 loadQuestion();
