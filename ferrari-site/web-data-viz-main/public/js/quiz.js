import questions from "./questions.js";

const question = document.getElementById('question');
const answers = document.getElementById('answers');
const spanQtd = document.getElementById('spanQtd');
const textFinish = document.getElementById('textFinish');
const content = document.getElementById('content');
const contentFinish = document.getElementById('finish');
const btnRestart = document.getElementById('btnRestart');

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
};

function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}

function finish() {
    textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    spanQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    for (let i = 0; i < item.answers.length; i++) {
        const answer = item.answers[i];
        const div = document.createElement("div");
        div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
    ${answer.option}
    </button>
    `;
        answers.appendChild(div);
    }

    const answerButtons = document.querySelectorAll(".answer");
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", nextQuestion);
    }
}

loadQuestion();

