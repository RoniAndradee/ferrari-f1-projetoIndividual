const questoes = [
    {
        questao: "Qual piloto venceu mais campeonatos de Fórmula 1 pela Ferrari?",
        respostas: [
            { opcao: "Michael Schumacher", correta: true },
            { opcao: "Sebastian Vettel", correta: false },
            { opcao: "Niki Lauda", correta: false },
        ],
    },
    {
        questao: "Quantos títulos de construtores a Ferrari ganhou na Fórmula 1 até agora?",
        respostas: [
            { opcao: "16", correta: false },
            { opcao: "15", correta: true },
            { opcao: "13", correta: false },
        ],
    },
    {
        questao: "Qual piloto conquistou o último título mundial de pilotos pela Ferrari antes da era de Michael Schumacher?",
        respostas: [
            { opcao: "Niki Lauda", correta: true },
            { opcao: "Alain Prost", correta: false },
            { opcao: "Jody Scheckter", correta: false },
        ],
    },
    {
        questao: "Qual é o circuito onde a Ferrari conquistou o maior número de vitórias na Fórmula 1?",
        respostas: [
            { opcao: "Circuito de Silverstone", correta: false },
            { opcao: "Circuito de Monza", correta: true },
            { opcao: "Circuito de Spa-Francorchamps", correta: false },
        ],
    },
    {
        questao: "Quem foi o fundador da Scuderia Ferrari, a equipe de corrida da Ferrari?",
        respostas: [
            { opcao: "Enzo Ferrari", correta: true },
            { opcao: "Luigi Chinetti", correta: false },
            { opcao: "Gilles Villeneuve", correta: false },
        ],
    },
    {
        questao: "Quem foi o primeiro piloto a vencer um Grande Prêmio pela Ferrari?",
        respostas: [
            { opcao: "Nino Farina", correta: true },
            { opcao: "Juan Manuel Fangio", correta: false },
            { opcao: "Tazio Nuvolari", correta: false },
        ],
    },
    {
        questao: "Quem foi o piloto da Ferrari que venceu o Grande Prêmio de Mônaco por cinco vezes consecutivas?",
        respostas: [
            { opcao: "Michael Schumacher", correta: true },
            { opcao: "Sebastian Vettel", correta: false },
            { opcao: "Kimi Räikkönen", correta: false },
        ],
    },
    {
        questao: "Em qual ano a Ferrari estreou na Fórmula 1?",
        respostas: [
            { opcao: "1950", correta: true },
            { opcao: "1948", correta: false },
            { opcao: "1952", correta: false },
        ],
    },
    {
        questao: "Qual foi o primeiro piloto a ganhar o campeonato de pilotos pela Ferrari após a era de Michael Schumacher?",
        respostas: [
            { opcao: "Kimi Räikkönen", correta: true },
            { opcao: "Felipe Massa", correta: false },
            { opcao: "Fernando Alonso", correta: false },
        ],
    },
    {
        questao: "Qual foi o ano mais recente em que a Ferrari conquistou o título de construtores na Fórmula 1?",
        respostas: [
            { opcao: "2010", correta: false },
            { opcao: "2008", correta: false },
            { opcao: "2007", correta: true },
        ],
    }
];

const main = document.getElementById('main');
const inicio = document.getElementById('inicio')
const questao = document.getElementById('questao');
const respostas = document.getElementById('respostas');
const spanQtd = document.getElementById('spanQtd');
const textoFinal = document.getElementById('textFinish');
const content = document.getElementById('content');
const contentFinish = document.getElementById('finish');
const congratsFinish = document.getElementById('congratsFinish');
const btnReiniciar = document.getElementById('btnReiniciar');
const btnIniciar = document.getElementById('btnIniciar');

let indiceAtual = 0;
let questoesCorretas = 0;
let idQuiz = 1;
let idUsuario = sessionStorage.ID_USUARIO;

btnIniciar.onclick = () => {
    inicio.style.display = "none";
    main.style.display = "flex";
    questao.style.margin = "20px 0";
    embaralharQuestoes(questoes);
    carregarQuestao();
};

btnReiniciar.onclick = () => {
    inicio.style.display = "flex";
    contentFinish.style.display = "none";
    main.style.display = "none";
    location.reload();
    indiceAtual = 0;
    questoesCorretas = 0;
};

function embaralharQuestoes(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)).toFixed(0);
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
    return lista;
}

function carregarQuestao() {
    spanQtd.innerHTML = `${indiceAtual + 1} de ${questoes.length}`;
    const item = questoes[indiceAtual];
    respostas.innerHTML = "";
    questao.innerHTML = item.questao;

    for (let i = 0; i < item.respostas.length; i++) {
        const answer = item.respostas[i];
        const div = document.createElement("div");
        div.innerHTML = `
    <button class="opcao" id="opcao" opcao-correta="${answer.correta}">
    ${answer.opcao}
    </button>
    `;
        respostas.appendChild(div);
    }

    const botoesRespostas = document.querySelectorAll(".opcao");
    for (let i = 0; i < botoesRespostas.length; i++) {
        botoesRespostas[i].addEventListener("click", proximaQuestao);
    }
}


function proximaQuestao(event) {
    if (event.target.getAttribute("opcao-correta") === "true") {
        questoesCorretas++;
    }

    if (indiceAtual < questoes.length - 1) {
        indiceAtual++;
        carregarQuestao();
    } else {
        finalizar();
    }
}

function finalizar() {
    textoFinal.innerHTML = `Você acertou ${questoesCorretas} de ${questoes.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";

    if (questoesCorretas <= 5) {
        congratsFinish.innerHTML = `Parabéns! Mas você precisa estudar um pouco mais 😕`;
    } else if (questoesCorretas <= 8) {
        congratsFinish.innerHTML = `Parabéns! Você é um bom Fã da Ferrari, mas da pra melhorar! 😉`;
    } else {
        congratsFinish.innerHTML = `Parabéns! Você é um verdadeiro Fã da Ferrari! #tirouOnda😎`;
    }

    goToDash.innerHTML = `<a href="../dashboard/dashboard.html">Acesse sua Dashboard</a>`;
    fetch("/quiz/tentativa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            corretasServer: questoesCorretas,
            idServer: idUsuario,
            quizServer: idQuiz
        }),
    })
}


