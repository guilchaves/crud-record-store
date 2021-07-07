# CRUD - Record Store Project

Projeto criado com a finalidade de aprender como desenvolver uma API Restful e consumi-la por um cliente frontend. 

O projeto tem a intenção de simular um software de controle de estoque de uma loja de discos.
A API permite que se cadastre, atualize e remova discos em um banco de dados. O cliente renderiza numa tabela os discos cadastrados no banco de dados.

## Record Store Stock Control API

- Banco de dados utilizado: _MySQL_
- Tecnologias backend: _express.js_
- Tecnologias frontend: html, css, bootstrap, js
  
#### Instalação:

- Instalar o [mySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/windows-install-archive.html)
- Depois de clonar o repositório, dentro da pasta api, iniciar o pacote com: `npm install`
- Alterar os valores do _db.js_ de acordo com o banco de dados local 
- Subir o banco de dados com: `npm start`
- A API irá subir na portal 3000.

#### Características:
- Cada disco deve possuir os seguintes campos: id, nome do disco, artista, ano de lançamento, data de registro, quantidade em estoque, observação.

#### Endpoints:
Os endpoins criados são:

- A rota GET /albums deve trazer a lista de todos discos.
- A rota GET /albums/:id deve retornar um disco específico por id.
- A rota POST /albums deve receber no body _id_, _name_, _artist_, _releaseDate_, _registrationDate_, _quantity_ e _notes_. Todos requeridos.
- A rota PATCH /albums/:id deve salvar as atualizações do disco através de seu id.
- A rota DELETE /albums/:id deve remover o disco através de seu id. 
