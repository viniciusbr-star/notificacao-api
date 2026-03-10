// src/models/ParticipanteModel.js

let participantes = [
  { id: 1, nome: "Ana Silva", email: "ana@email.com" },
  { id: 2, nome: "Carlos Souza", email: "carlos@email.com" },
  { id: 3, nome: "Maria Santos", email: "maria@email.com" }
];

let proximoId = 4;

function listarTodos() {
  return participantes;
}

function buscarPorId(id) {
  return participantes.find((participante) => participante.id === id);
}

function criar(dados) {
  const novoParticipante = {
    id: proximoId++,
    nome: dados.nome,
    email: dados.email,
  };
  participantes.push(novoParticipante);
  return novoParticipante;
}

function atualizar(id, dados) {
  const index = participantes.findIndex((p) => p.id === id);
  if (index === -1) return null;

  // Atualiza apenas os dados enviados, mantendo o ID original
  participantes[index] = {
    ...participantes[index],
    ...dados,
    id: id // Garante que o ID não mude
  };

  return participantes[index];
}

function deletar(id) {
  const index = participantes.findIndex((participante) => participante.id === id);
  
  if (index !== -1) {
    participantes.splice(index, 1); // Remove o item do array
    return true;
  }
  return false;
}

module.exports = {
  listarTodos,
  buscarPorId,
  criar,
  atualizar,
  deletar,
};