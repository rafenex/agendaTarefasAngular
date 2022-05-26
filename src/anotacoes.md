Capturar os dados das tarefas

Criando um artefato em Angular para desenvolvermos o modelo de 
dados que sera utilizado para capturar as informações das tarefas.

ng generate interface models/tarefa model

Explicando o comando:
<Criação>  <Artefato> <PASTA> <NOME> <TIPO>


Criando outro artefato no projeto que ira gravar as informações
das tarefas em memoria no projeto Angular.

ng generate service services/tarefas

/src/app/services/tarefas.service.ts
Criando funções para armazenar dados das tarefas cadastradas em memoria

NGX - PAGINATION
http://www.npmjs.com/package/ngx-pagination
Componente desenvolvido para Angular voltado para realização de paginação de dados(Tabelas, listas, etc)
PARAR O PROJETO

npm i ngx-pagination
npm install --save ngx-pagination

Ir ao /app.module.ts e reconhecer a biblioteca e reconhecer a biblioteca 

Iremos a pagina de consulta para configurar a paginação
configurar no ngFor e depois no local onde vamos colocar a Régua de paginação