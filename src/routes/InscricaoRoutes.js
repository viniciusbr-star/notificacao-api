const express = require("express");
const router = express.Router();
const InscricaoController = require("../controllers/InscricaoController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Inscricao:
 *       type: object
 *       required:
 *         - participanteId
 *         - eventoId
 *       properties:
 *         id:
 *           type: integer
 *           description: ID gerado automaticamente
 *         participanteId:
 *           type: integer
 *           description: ID do participante vinculado
 *         eventoId:
 *           type: integer
 *           description: ID do evento vinculado
 *         dataInscricao:
 *           type: string
 *           description: Data em que a inscrição foi realizada
 *       example:
 *         id: 1
 *         participanteId: 10
 *         eventoId: 2
 *         dataInscricao: "2025-05-20"
 */

/**
 * @swagger
 * /inscricoes:
 *   get:
 *     summary: Listar todas as inscrições
 *     tags: [Inscrições]
 *     responses:
 *       200:
 *         description: Lista de inscrições
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inscricao'
 */
router.get("/", InscricaoController.index);

/**
 * @swagger
 * /inscricoes/{id}:
 *   get:
 *     summary: Buscar inscrição por ID
 *     tags: [Inscrições]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da inscrição
 *     responses:
 *       200:
 *         description: Inscrição encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inscricao'
 *       404:
 *         description: Inscrição não encontrada
 */
router.get("/:id", InscricaoController.listarPorEvento);

/**
 * @swagger
 * /inscricoes:
 *   post:
 *     summary: Realizar uma nova inscrição
 *     tags: [Inscrições]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - participanteId
 *               - eventoId
 *             properties:
 *               participanteId:
 *                 type: integer
 *               eventoId:
 *                 type: integer
 *             example:
 *               participanteId: 10
 *               eventoId: 2
 *     responses:
 *       201:
 *         description: Inscrição realizada com sucesso
 *       400:
 *         description: Erro na requisição ou IDs inválidos
 */
router.post("/", InscricaoController.store);

/**
 * @swagger
 * /inscricoes/{id}:
 *   delete:
 *     summary: Cancelar uma inscrição
 *     tags: [Inscrições]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Inscrição removida
 *       404:
 *         description: Inscrição não encontrada
 */
router.delete("/:id", InscricaoController.destroy);

module.exports = router;