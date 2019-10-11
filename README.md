# Fullstack Developer Challenge

Aplicação para listagem de clientes inadimplentes

## Implementação

1. Backend em NodeJs com Express padrão MVC
2. Banco de dados MongoDB em container docker
3. API REST com método get para listagem de clientes inadimplentes.
4. Método POST no backend criado apenas para cadastro de cliente afim de gerar massa de dados para o frontend. Ele não possui nenhum tipo de validação dos parâmetros de entrada pois não está no escopo do projeto
5. Frontend na pasta Views com tela que lista clientes inadimplemtes atráves do api implementada no backend
6. Frontend com método para filtrage de clientes pelo nome
7. Metodo de ordenação da tabela de clientes - Em andamento
8. Estilização da tela de clientes inadimplementes - Não iniciado

## Instalação da aplicação

1. Clonar o projeto
2. Com o docker instalado, executar o comando "docker run --name mongoclientes -p 27017:27017 -d -t mongo" para criar o container do banco de dados mongoDb
3. Na pasta do projeto, executar o comando "npm install", para instalar as dependências do projeto
4. Inserir registros na base através do método POST na roda "defaulters"
5. Abrir o arquivo index.html localizado na pasta src/views
