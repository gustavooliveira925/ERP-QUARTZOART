const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Listar todos os clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
});

// Criar novo cliente
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const cliente = await prisma.cliente.create({ data });
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
});

// Editar cliente
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const cliente = await prisma.cliente.update({ where: { id }, data });
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao editar cliente' });
  }
});

// Excluir cliente
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.cliente.delete({ where: { id } });
    res.json({ message: 'Cliente removido' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir cliente' });
  }
});

module.exports = router;
