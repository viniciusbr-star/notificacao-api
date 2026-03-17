// src/app.js
const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

// 1. PRIMEIRO: Configure o middleware de JSON
app.use(express.json());

// 2. DEPOIS: Importe as rotas (apenas uma vez cada)
const participanteRoutes = require("./routes/ParticipanteRoutes");
const eventoRoutes = require("./routes/eventoRoutes");
const inscricaoRoutes = require("./routes/InscricaoRoutes");

// 3. Use as rotas com seus prefixos
app.use("/participantes", participanteRoutes);
app.use("/eventos", eventoRoutes);
app.use("/inscricoes", inscricaoRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rota raiz (informativa)
app.get("/", (req, res) => {
  res.json({
    mensagem: "API de Notificações",
    rotas: {
      eventos: "/eventos",
      participantes: "/participantes",
      inscricoes: "/inscricoes",
      documentacao: "/api-docs",
    },
  });
});

module.exports = app;
