# 🔔 Notificações API

> API REST robusta para o módulo de notificações por e-mail de uma plataforma de gerenciamento de eventos.

Este projeto foi desenvolvido como parte da **Situação de Aprendizagem** do curso de **Programação Back-End do SENAI**. O foco principal é a automação de comunicações essenciais para a experiência do usuário em eventos.

---

## 📋 Sobre o Projeto

O módulo de notificações é responsável por processar e disparar fluxos de comunicação automática para os participantes, garantindo que informações importantes cheguem ao destino no momento certo.

### Principais Funcionalidades:
* ✅ **Confirmação de Inscrição:** Envio imediato após o cadastro no evento.
* ⏰ **Lembretes de Eventos:** Alertas agendados para evitar faltas e aumentar o engajamento.

---

## 🛠️ Tecnologias Utilizadas

O projeto utiliza tecnologias modernas e amplamente adotadas no mercado:

* **Node.js**: Ambiente de execução Javascript server-side.
* **Express.js**: Framework web para construção de APIs.
* **Swagger (OpenAPI)**: Documentação interativa e testes de endpoints.
* **swagger-jsdoc & swagger-ui-express**: Integração da documentação ao código.

---

## 📁 Estrutura do Projeto

A arquitetura segue padrões de organização que facilitam a manutenção:

```text
src/
├── models/       # Definições de dados (Schemes)
├── controllers/  # Lógica de negócio e tratamento de requisições
├── routes/       # Definição dos caminhos da API
├── swagger.js    # Configurações do Swagger
├── app.js        # Configuração da instância do Express
└── server.js     # Ponto de entrada (Boot da aplicação)

``` 



| Método | Rota         | Descrição     |
| ------ | ------------ | ------------- |
| GET    | /eventos     | Listar todos  |
| GET    | /eventos/:id | Buscar por ID |
| POST   | /eventos     | Criar novo    |
| PUT    | /eventos/:id | Atualizar     |
| DELETE | /eventos/:id | Deletar       |
#

| Método | Rota               | Descrição     |
| ------ | ------------------ | ------------- |
| GET    | /participantes     | Listar todos  |
| GET    | /participantes/:id | Buscar por ID |
| POST   | /participantes     | Criar novo    |
| PUT    | /participantes/:id | Atualizar     |
| DELETE | /participantes/:id | Deletar       |
#

| Método | Rota                         | Descrição          |
| ------ | ---------------------------- | ------------------ |
| POST   | /inscricoes                  | Criar inscrição    |
| GET    | /inscricoes                  | Listar todas       |
| GET    | /inscricoes/evento/:eventoId | Listar por evento  |
| PATCH  | /inscricoes/:id/cancelar     | Cancelar inscrição |


## 🛠️ Tecnologias Utilizadas

<b> 🟢 Node.js

⚡ Express.js

📘 Swagger

        swagger-jsdoc

        swagger-ui-express