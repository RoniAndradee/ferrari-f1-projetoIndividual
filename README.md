# Ferrari na Fórmula 1 - Projeto Individual

Um projeto feito no 1º Semestre de ADS na SPTech School, o projeto aborda a ferrari na Fórmula 1 e sua importância em minha vida.

<hr>

## Funcionalidades

• O site conta com páginas de login e cadastro funcionais e conectadas com um banco de dados **mysql**.

• Ao realizar o login o usuário tem acesso a uma página onde pode realizar um quiz sobre a Ferrari.

• Após realizar o quiz o usuário pode acessar uma dashboard onde pode visualizar KPI's com as seguintes informações:
    <br>
    °**Maior Pontuação no Quiz**;
    <br>
    °**Menor Pontuação no Quiz**;
    <br>
    °**Média de Pontuação no Quiz**;

• Além das KPI's o usuário pode visualizar 3 gráficos sendo eles:
    <br>
    1. **Um gráfico de linhas com histórico de pontuação no Quiz nas últimas tentativas;**
    <br>
    2. **Um gráfico de barras com o top de 5 usuários com mais pontos no Quiz;**
    <br>
    3. **Um gráfica de pizza com os pilotos mais escolhidos na hora do cadastro;**

<hr>

## Como usar

1. Clone este repositório em sua máquina.


2. Crie, no Banco de Dados, as tabelas necessárias para o funcionamento deste projeto.
- Siga as instruções no arquivo **/src/database/script-banco.sql**


3. Acesse o arquivo **app.js** e parametrize o ambiente.
- Se você estiver utilizando o Ambiente de Produção (remoto), comente a linha 2 e deixe habilitada a linha 1 onde está o valor **var ambiente_processo = 'producao';**
- Se você estiver utilizando o Ambiente de Desenvolvimento (local), comente a linha 1 e deixe habilitada a linha 2 onde está o valor **var ambiente_processo = 'desenvolvimento';**

4. Adicione as credenciais de Banco de Dados no arquivo **.env** ou em **.end.dev**, seguindo as instruções neste.

5. Acesse este repositório no seu terminal (GitBash ou VSCode) e execute os comandos abaixo:

```
npm i
``` 
_O comando acima irá instalar as bibliotecas necessárias para o funcionamento do projeto. As bibliotecas a serem instaladas estão listadas no arquivo **package.json** então é muito importante que este não seja alterado. Será criada uma nova pasta/diretório chamado **node_modules** quando o comando for finalizado, que é onde as bibliotecas estão localizadas. Não altere a pasta/diretório._

```
npm start
``` 

_O comando acima irá iniciar seu projeto e efetuar os comandos de acordo com a sua parametrização feita nos passos anteriores._

6. Para "ver" seu projeto funcionando, acesse em seu navegador o caminho **informado no terminal**.

7. Caso queira parar a execução, tecle **CTRL+C** no terminal em que o projeto está rodando.