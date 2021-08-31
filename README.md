# Developers Test - Setembro/2021

O objetivo do nosso teste é entender as capacidades analíticas de nossos colaboradores e, também, incentivar estudos e introduzir novas tecnologias que estejam diretamente ligadas a JavaScript*.

Obs.: Testes posteriores trarão linguagens como Python, .NET e PHP.

---

## O Teste

Vamos criar uma aplicação que consuma os dados da API do <a href="https://www.themoviedb.org/documentation/api?language=pt-BR" target="_blank">TheMovieDB</a> para listagem de filmes, séries e shows.

A documentação do TheMovieDB encontra-se em inglês, então esse é mais um teste para vocês. Ela deve ser lida e entendida.

Para fins de teste da API, vocês podem utilizar o <a href="https://www.postman.com/" target="_blank">Postman</a>.

---
## Requisitos

### Quais tecnologias devem ser utilizadas?
* React.js (<i>w/wo CRA - Create React App</i>)
* Git (<i>for the most obvious reasons</i>)

### Quais tecnologias posso utilizar pra dar um charme a mais?
* Node.js
* Mongo.DB

### Quais tecnologias não devo utilizar?
* Qualquer outra linguagem não relacionada a JavaScript
* jQuery (por favor né, estamos em 2021)
* Axios (use e abuse do <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHTTPRequest" target="_blank">XHR</a> e <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Fetch</a>)

### O que o site precisa ter?
* Uma lista de trending movies e séries de TV (Uma ótima referência é o próprio site do TheMovieDB).
* Uma página interna que mostra os detalhes do filme/série.
* Um campo de pesquisa

Vocês podem exceder a lista de necessidades, mas atenham-se ao tempo.

---
## Evitar

Não é necessário se preocupar com layout ou responsividade. O objetivo do teste é justamente testar skills como inglês (leitura), lógica e organização de código.
Foque em ter uma API sendo consumida de forma estável ao invés de um layout que não traga os dados necessários.

---
## Avaliação

Ganha pontos se:
* Mandar bem no inglês
* Modularizar/Componentizar o código
* Documentar o código
* Readme.md explicativo e de fácil execução para teste do projeto
* Estar hospedado em alguma plataforma como Heroku ou Netlify
* Commitar corretamente, de forma a explicar o que foi feito.

Ganha muitos pontos se:
* Consumir os dados via Node.js e cacheá-los dentro do MongoDB
* Criar um sistema CRUD de autenticação para usuários logados
* Utilizar o Context do React
* Desenvolver a aplicação totalmente em paradigma Funcional
* Apresentar para toda a equipe o que foi feito e todo o modelo de lógica (data a ser definida)
* Preocupar-se em performance
* Preocupar-se em acessibilidade

Perde pontos se:
* Usar bibliotecas em excesso e sem necessidade
* Código bagunçado e de difícil manutenebilidade
* Utilizar algum item que esteja na lista de tecnologias que não podem ser utilizadas
* Não criar um readme.md
* Commitar a node_modules ou pastas como build, dist, etc
* Não commitar o projeto
* Commits mal explicados ou condensados todos em um só

---
## Prazo
Início: Até 02/Setembro

Data a ser contada: No início do envio da Issue

Data final: 20/Setembro

---
## Optin
Para aceitar o teste, abra uma issue nesse repositório com o template: [seunome]-[data]-aceite

[seunome] = Seu nome completo

[data] = a data do dia que criou a issue

aceite = manter da mesma forma
