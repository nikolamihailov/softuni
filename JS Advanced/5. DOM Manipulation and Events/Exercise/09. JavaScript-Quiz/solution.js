function solve() {
  const sections = Array.from(document.querySelectorAll("#quizzie section"));
  const results = document.querySelector("#results h1");
  const ulResults = document.getElementById("results");
  const correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let index = 0;
  let score = 0;

  sections.forEach(section => {
    const [answerA, answerB] = Array.from(section.querySelectorAll(".answer-text"));

    answerA.addEventListener("click", () => {
      index++;
      if (index <= sections.length) {
        if (correctAnswers.includes(answerA.textContent)) score++;
        section.style.display = "none";
        if (sections[index]) sections[index].style.display = "block";
        if (index === 3) {
          ulResults.style.display = "block";
          if (score === 3) {
            results.textContent = "You are recognized as top JavaScript fan!";
          } else {
            results.textContent = `You have ${score} right answers`;
          }
        }
      }
    });

    answerB.addEventListener("click", () => {
      index++;
      if (index <= sections.length) {
        if (correctAnswers.includes(answerB.textContent)) score++;
        section.style.display = "none";
        if (sections[index]) sections[index].style.display = "block";
        if (index === 3) {
          ulResults.style.display = "block";
          if (score === 3) {
            results.textContent = "You are recognized as top JavaScript fan!";
          } else {
            results.textContent = `You have ${score} right answers`;
          }
        }
      }
    });

  });
}
