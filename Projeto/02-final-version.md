# **CSI606-2020-02 - Remoto - Trabalho Final - Resultados**
## *Aluna(o): Raphael Rodrigues de Figueiredo Lage*

--------------

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

  O trabalho final objetivo o desenvolvimento de um sistema para divulgação e controle de vagas de estágios. A partir da ideia que divulgações sobre vagas de estágios ocorrem com frequência, o propósito desse projeto é solucionar o problema sobre as divulgações no e-mail que podem ficar perdidas ou misturadas com outros inúmeros e-mails e serem esquecidas. Por isso através de uma mini plataforma, deve ser possível visualizar essas vagas, seus detalhes e meios de contato.
### 1. Funcionalidades implementadas
<!-- Descrever as funcionalidades que eram previstas e foram implementas. -->

- Gerenciar vagas de estágio. Pelo sistema deve ser possível realizar o controle das vagas de estágio, contemplando criação, remoção, atualização e visualização das vagas.
    - Criar
    - Atualizar
    - Deletar
    - Visualizar e pesquisar

- Gerenciar usuários. O sistema deve contemplar também o controle de usuários para que seja possível somente usuários credenciados divulgar as vagas no sistema.
    - Criar
    - Atualizar
    - Deletar
    - Visualizar e pesquisar

- Autenticação de usuários. Para que seja possível usuários gerenciarem outros usuários e vagas de estágio, ele deve realizar login a partir de suas credenciais.
    - Realizar login
  
### 2. Funcionalidades previstas e não implementadas
<!-- Descrever as funcionalidades que eram previstas e não foram implementas, apresentando uma breve justificativa do porquê elas não foram incluídas -->

- Diferenciação entre usuários, como por exemplo administrador, empresa, aluno, entre outros. Com isso seria possível expandir para o público externo como empresas parceiras, para abrir a possibilidade de elas mesmas administrarem a divulgação de suas vagas em parceria com as universidades e ocorrer integração entre alunos, universidade e empresas.

- Gerenciar o status da vaga, ou seja, se ja foi preenchida ou se ainda está aberta.

- Implementação de paginação na visualização de vagas da página principal.

### 3. Outras funcionalidades implementadas
<!-- Descrever as funcionalidades implementas além daquelas que foram previstas, caso se aplique.  -->
- Autenticação e gerenciamento de sessão por cookie.
### 4. Principais desafios e dificuldades
<!-- Descrever os principais desafios encontrados no desenvolvimento do trabalho, quais foram as dificuldades e como elas foram superadas e resolvidas. -->
O principal desafio encontrado por mim foi elaborar interfaces já que não tenho muita aptidão com o objetivo de ser simples mas interessante. Como acabei direcionando a aplicação para a UFOP, tive algumas inspirações do próprio site da universidade e também de algumas aplicações que havia feito em exercícios de bootcamps e cursos. 

Outro ponto também foi sobre balancear e equilibrar escolhas, poderia ter pensado em adicionar mais complexidade ao sistema, porém por causa de certas experiências priorizei em realizar um MVP(Minímo-Produto-Viável) e certamente foi uma boa escolha.

No geral, foi bem interessante, consegui fortalecer mais ainda meus conhecimentos e utilizar algumas técnicas diferentes para autenticação de usuário.
### 5. Instruções para instalação e execução
<!-- Descrever o que deve ser feito para instalar (ou baixar) a aplicação, o que precisa ser configurando (parâmetros, banco de dados e afins) e como executá-la. -->

- Pré-requisitos
  - Node.js instalado, recomendado utilizar versão LTS, disponível em: https://nodejs.org/en/
  - SGBD PostgreSQL instalado ou pode utilizar um container PostgreSQL no Docker.
    - PostgreSQL https://www.postgresql.org/
    - Docker: https://hub.docker.com/_/postgres
  - NPM ou Yarn instalado.
    - npm, já vem instalado com Node.js.
    - yarn, disponível em: https://yarnpkg.com/
  - Criar uma database.

- API
  - Para realizar a instalação de suas dependências entrar no diretório `./2020-02-remoto-atividades-raphhaelr/Projeto/api`.
  - Executar o comando `npm install` ou `yarn`.
  - Após a instalação das dependências do projeto, é necessário alterar as variáveis de conexão com o banco de dados.
    - Para isso, abra o arquivo `knexfile.ts` localizado no diretório `./2020-02-remoto-atividades-raphhaelr/Projeto/api/src/database`.
      - host: 'seu_host_aqui'
      - port: 5432 -> Por padrão a porta do PostgreSQL é 5432, caso tenha alterado, aqui vc deve colocar a porta utilizada.
      - database: 'sua_database_aqui'
      - user: 'seu_usuario_aqui',
      - password: 'sua_senha_aqui'
  - Depois de realizar a alteração nas variáveis de conexão com o banco de dados, é necessário rodar as **migrations** para criação das tabelas no banco de dados.
    - Para isso na raiz do projeto (API) `./2020-02-remoto-atividades-raphhaelr/Projeto/api` execute o comando `npm knex:migrate:latest` ou `yarn knex:migrate:latest`
  - Após as tabelas serem criadas através das migrations, o projeto está apto a ser inicializado.
    - Para executar o servidor (API) executar o comando `npm dev` ou `yarn dev` na raiz do projeto `./2020-02-remoto-atividades-raphhaelr/Projeto/api`.
    - Após a execução do comando a mensagem `Server started on PORT 3333` deve aparecer no terminal.

- WEB
  - Para realizar a instalação de suas dependências entrar no `./2020-02-remoto-atividades-raphhaelr/Projeto/web`.
  - Executar o comando `npm install` ou `yarn`.
  - Após a instalação das dependências do projeto, é possível executar o projeto.
  - Para inicializar o projeto execute o comando no diretório `npm start` ou `yarn start` no diretório `./2020-02-remoto-atividades-raphhaelr/Projeto/web`.
  - Após a execução do comando, o projeto pode ser acessado através do endereço https://localhost:3000

### 6. Referências

- Typescript: https://www.typescriptlang.org/
- Express: https://expressjs.com/pt-br/
- Knex: https://knexjs.org/
- UFOP: https://ufop.br/

