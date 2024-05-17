import questions from "./questions.js";

const questao = document.getElementById('questao');
const respostas = document.getElementById('respostas');
const spanQtd = document.getElementById('spanQtd');
const textoFinal = document.getElementById('textoFinal');
const content = document.getElementById('content');
const contentFinish = document.getElementById('finish');
const btnReiniciar = document.getElementById('btnReiniciar');

let indiceAtual = 0;
let qtdQuestoesCorretas = 0;

btnReiniciar.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    indiceAtual = 0;
    qtdQuestoesCorretas = 0;
    carregarQuestao();
};

function proximaQuestao(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        qtdQuestoesCorretas++;
    }

    if (indiceAtual < questions.length - 1) {
        indiceAtual++;
        carregarQuestao();
    } else {
        finalizar();
    }
}

function finalizar() {
    textoFinal.innerHTML = `você acertou ${qtdQuestoesCorretas} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function carregarQuestao() {
    spanQtd.innerHTML = `${indiceAtual + 1} de ${questions.length}`;
    const item = questions[indiceAtual];
    respostas.innerHTML = "";
    questao.innerHTML = item.question;

    for (let i = 0; i < item.answers.length; i++) {
        const answer = item.answers[i];
        const div = document.createElement("div");
        div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
    ${answer.option}
    </button>
    `;
        respostas.appendChild(div);
    }

    const answerButtons = document.querySelectorAll(".answer");
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", proximaQuestao);
    }
}

carregarQuestao();

