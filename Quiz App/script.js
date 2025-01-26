const questions = [
  {
    question: "Which is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Gold", correct: false },
      { text: "Osmium", correct: false },
      { text: "Olive", correct: false },
    ],
  },
  {
    question: "What is the capital city of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "What is the boiling point of water at sea level (in °C)?",
    answers: [
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "120°C", correct: false },
      { text: "80°C", correct: false },
    ],
  },
];

const questionElement = document.querySelector("#question");
const answerButtonsElement = document.querySelector("#answerbtns");
const nextButton = document.querySelector("#nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${
    currentQuestion.question
  }`;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) {
    score++;
    selectedButton.classList.add("correct");
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = `Quiz finished! You scored ${score} out of ${questions.length}.`;
  nextButton.innerHTML = "Restart";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", startQuiz);
}

startQuiz();
