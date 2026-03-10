const express = require("express");
const router = express.Router();
const ParticipanteController = require("../controllers/ParticipanteController")
router.get("/", ParticipanteController.index); // GET /Participantes
router.get("/:id", ParticipanteController.show); // GET /Participantes/:id
router.post("/", ParticipanteController.store); // POST /Participantes
router.put("/:id", ParticipanteController.update); // PUT /Participantes/:id
router.delete("/:id", ParticipanteController.destroy); // DELETE /Participantes/:id
module.exports = router;