// src/controllers/InscricaoController.js

const InscricaoModel = require("../models/InscricaoModel");

// POST /inscricoes - criar uma inscrição
function store(req, res) {
  const { eventoId, participanteId } = req.body;

  if (!eventoId || !participanteId) {
    return res
      .status(400)
      .json({ erro: "eventoId e participanteId são obrigatórios" });
  }

  const resultado = InscricaoModel.criar(
    parseInt(eventoId),
    parseInt(participanteId),
  );

  if (resultado.erro) {
    return res.status(400).json(resultado);
  }

  res.status(201).json(resultado);
}

// GET /inscricoes - listar todas
function index(req, res) {
  // Implementado: retorna todas as inscrições
  const inscricoes = InscricaoModel.listarTodas();
  res.json(inscricoes);
}

// GET /inscricoes/evento/:eventoId - listar inscrições de um evento
function listarPorEvento(req, res) {
  const eventoId = parseInt(req.params.eventoId);
  // Implementado: usa InscricaoModel.listarPorEvento()
  const inscricoes = InscricaoModel.listarPorEvento(eventoId);
  res.json(inscricoes);
}

// PATCH /inscricoes/:id/cancelar - cancelar uma inscrição
function destroy(req, res) {
  const id = parseInt(req.params.id);
  // Implementado: usa InscricaoModel.cancelar()
  const inscricaoCancelada = InscricaoModel.cancelar(id);

  // Se retornar null, responda 404. Se retornar a inscrição, responda com ela.
  if (!inscricaoCancelada) {
    return res.status(404).json({ erro: "Inscrição não encontrada" });
  }

  res.json(inscricaoCancelada);
}

module.exports = { store, index, listarPorEvento, destroy };
