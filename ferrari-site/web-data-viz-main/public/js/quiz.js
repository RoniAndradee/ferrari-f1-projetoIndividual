// import questions from "./questions.js";
const questions = [
    {
        question: "Qual piloto venceu mais campeonatos de Fórmula 1 pela Ferrari?",
        answers: [
            { option: "Michael Schumacher", correct: true },
            { option: "Sebastian Vettel", correct: false },
            { option: "Niki Lauda", correct: false },
        ],
    },
    {
        question: "Quantos títulos de construtores a Ferrari ganhou na Fórmula 1 até agora?",
        answers: [
            { option: "16", correct: false },
            { option: "15", correct: true },
            { option: "13", correct: false },
        ],
    },
    {
        question: "Em que ano a Ferrari ganhou seu primeiro campeonato de construtores na Fórmula 1?",
        answers: [
            { option: "1950", correct: false },
            { option: "1961", correct: true },
            { option: "1975", correct: false },
        ],
    },
    {
        question: "Qual é o circuito onde a Ferrari conquistou o maior número de vitórias na Fórmula 1?",
        answers: [
            { option: "Circuito de Silverstone", correct: false },
            { option: "Circuito de Monza", correct: true },
            { option: "Circuito de Spa-Francorchamps", correct: false },
        ],
    },
    {
        question: "Quantas vezes a Ferrari terminou em segundo lugar no campeonato de construtores?",
        answers: [
            { option: "8", correct: false },
            { option: "9", correct: true },
            { option: "7", correct: false },
        ],
    },
    {
        question: "Quem foi o primeiro piloto a vencer um Grande Prêmio pela Ferrari?",
        answers: [
            { option: "Nino Farina", correct: true },
            { option: "Juan Manuel Fangio", correct: false },
            { option: "Tazio Nuvolari", correct: false },
        ],
    },
    {
        question: "Qual é o número de chassi do carro da Ferrari que conquistou o primeiro campeonato mundial de pilotos para a equipe?",
        answers: [
            { option: "312B", correct: false },
            { option: "156", correct: true },
            { option: "246", correct: false },
        ],
    },
    {
        question: "Em qual ano a Ferrari estreou na Fórmula 1?",
        answers: [
            { option: "1950", correct: true },
            { option: "1948", correct: false },
            { option: "1952", correct: false },
        ],
    },
    {
        question: "Qual foi o primeiro piloto a ganhar o campeonato de pilotos pela Ferrari após a era de Michael Schumacher?",
        answers: [
            { option: "Kimi Räikkönen", correct: true },
            { option: "Felipe Massa", correct: false },
            { option: "Fernando Alonso", correct: false },
        ],
    },
    {
        question: "Qual foi o ano mais recente em que a Ferrari conquistou o título de construtores na Fórmula 1?",
        answers: [
            { option: "2010", correct: false },
            { option: "2008", correct: false },
            { option: "2007", correct: true },
        ],
    },
    // {
    //     question: "Quem foi o fundador da Scuderia Ferrari, a equipe de corrida da Ferrari?",
    //     answers: [
    //         { option: "Enzo Ferrari", correct: true },
    //         { option: "Luigi Chinetti", correct: false },
    //         { option: "Gilles Villeneuve", correct: false },
    //     ],
    // },
    // {
    //     question: "Qual foi o primeiro Grande Prêmio vencido pela Ferrari na Fórmula 1?",
    //     answers: [
    //         { option: "Grande Prêmio da Itália", correct: true },
    //         { option: "Grande Prêmio de Mônaco", correct: false },
    //         { option: "Grande Prêmio da Inglaterra", correct: false },
    //     ],
    // },
    // {
    //     question: "Quantas vezes a Ferrari conquistou o título de construtores na década de 2000?",
    //     answers: [
    //         { option: "6", correct: true },
    //         { option: "5", correct: false },
    //         { option: "7", correct: false },
    //     ],
    // },
    // {
    //     question: "Qual piloto conquistou o último título mundial de pilotos pela Ferrari antes da era de Michael Schumacher?",
    //     answers: [
    //         { option: "Niki Lauda", correct: true },
    //         { option: "Alain Prost", correct: false },
    //         { option: "Jody Scheckter", correct: false },
    //     ],
    // },
    // {
    //     question: "Quem foi o piloto da Ferrari que venceu o Grande Prêmio de Mônaco por cinco vezes consecutivas?",
    //     answers: [
    //         { option: "Michael Schumacher", correct: true },
    //         { option: "Sebastian Vettel", correct: false },
    //         { option: "Kimi Räikkönen", correct: false },
    //     ],
    // },
];

const questao = document.getElementById('questao');
const respostas = document.getElementById('respostas');
const spanQtd = document.getElementById('spanQtd');
const textoFinal = document.getElementById('textoFinal');
const content = document.getElementById('content');
const contentFinish = document.getElementById('finish');
const congratsFinish = document.getElementById('congratsFinish');
const btnReiniciar = document.getElementById('btnReiniciar');
const btnIniciar = document.getElementById('btnIniciar');

let indiceAtual = 0;
let qtdQuestoesCorretas = 0;
let idUsuario = sessionStorage.ID_USUARIO;

btnReiniciar.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    indiceAtual = 0;
    qtdQuestoesCorretas = 0;
    carregarQuestao();
};

btnIniciar.onclick = () => {
    question.style.margin = "20px 0"
    loadQuestion();
}

function proximaQuestao(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        qtdQuestoesCorretas++;
    }

    if (currentIndex < questions.length) {
        currentIndex++;
        loadQuestion();
    } else {
        finalizar();
    }
}

function finalizar() {
    textoFinal.innerHTML = `você acertou ${qtdQuestoesCorretas} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";

    if (questionsCorrect <= 5) {
        congratsFinish.innerHTML = `Parabéns! Mas você precisa estudar um pouco mais 😕`
    } else if (questionsCorrect <= 8) {
        congratsFinish.innerHTML = `Parabéns! Você é um bom Fã da Ferrari, mas da pra melhorar! 😉`
    } else {
        congratsFinish.innerHTML = `Parabéns! Você é um verdadeiro Fã da Ferrari! #tirouOnda😎`
    }

    fetch("/quiz/tentativa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            corretasServer: questionsCorrect,
            idServer: idUsuario
        }),
    })

}

function loadQuestion() {
    spanQtd.innerHTML = `${currentIndex} de ${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    for (let i = 0; i < item.answers.length; i++) {
        const answer = item.answers[i];
        const div = document.createElement("div");
        div.innerHTML = `
    <button class="answer" id="answer" data-correct="${answer.correct}">
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

loadQuestion();

