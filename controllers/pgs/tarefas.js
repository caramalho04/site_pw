const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Função para criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
    try {
        const { NomeTarefa, DataInicio, DataFim, Estado, Descricao } = req.body;
        const novaTarefa = await prisma.tarefas.create({
            data: {
                NomeTarefa,
                DataInicio,
                DataFim,
                Estado,
                Descricao
            }
        });
        res.status(201).json(novaTarefa);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Função para obter uma tarefa pelo ID
exports.obterTarefaPorId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const tarefa = await prisma.tarefas.findUnique({
            where: { id_Tarefa: id },
        });
        if (!tarefa) {
            throw new Error('Tarefa não encontrada');
        }
        res.status(200).json(tarefa);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Função para atualizar uma tarefa pelo ID
exports.atualizarTarefa = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { NomeTarefa, DataInicio, DataFim, Estado, Descricao } = req.body;
        const tarefaAtualizada = await prisma.tarefas.update({
            where: { id_Tarefa: id },
            data: {
                NomeTarefa,
                DataInicio,
                DataFim,
                Estado,
                Descricao
            }
        });
        res.status(200).json(tarefaAtualizada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Função para apagar uma tarefa pelo ID
exports.apagarTarefa = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.tarefas.delete({
            where: { id_Tarefa: id },
        });
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Função para listar todas as tarefas
exports.listarTarefas = async (req, res) => {
    try {
        const tarefas = await prisma.tarefas.findMany();
        res.status(200).json(tarefas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
