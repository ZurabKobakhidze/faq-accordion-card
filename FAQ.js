
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    answers[i].classList.toggle("show-answer");
    questions[i].classList.toggle("question-active");
    arrows[i].classList.toggle("arrow-active");
  });
}

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", () => {
    answers[i].classList.toggle("show-answer");
    questions[i].classList.toggle("question-active");
    arrows[i].classList.toggle("arrow-active");
  });
}
