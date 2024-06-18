const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Testa a ligação com o PostgreSQL
exports.testConnection = async (req, res) => {
    try {
        await prisma.$connect();
        res.send('Ligação bem-sucedida com o PostgreSQL!');
    } catch (error) {
        res.status(500).send(`Erro ao conectar ao PostgreSQL: ${error}`);
    } finally {
        await prisma.$disconnect();
    }
};

// Obtém todos os projetos
exports.getAll = async (req, res) => {
    try {
        const projetos = await prisma.projetos.findMany();
        res.status(200).json(projetos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtém um projeto pelo ID
exports.getById = async (req, res) => {
    const id = req.params.id;

    try {
        const projeto = await prisma.projetos.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (!projeto) {
            res.status(404).json({ message: `Projeto com ID ${id} não encontrado` });
            return;
        }
        res.status(200).json(projeto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cria um novo projeto
exports.create = async (req, res) => {
    const { Nome, Descricao, Estado } = req.body;

    try {
        const novoProjeto = await prisma.projetos.create({
            data: {
                Nome,
                Descricao,
                Estado,
            },
        });
        res.status(201).json(novoProjeto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Atualiza um projeto existente
exports.update = async (req, res) => {
    const { id, Nome, Descricao, Estado } = req.body;

    try {
        const projetoAtualizado = await prisma.projetos.update({
            where: {
                id: Number(id),
            },
            data: {
                Nome,
                Descricao,
                Estado,
            },
        });
        res.status(200).json(projetoAtualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Apaga um projeto pelo ID
exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        await prisma.projetos.delete({
            where: {
                id: Number(id),
            },
        });
        res.status(200).json({ message: `Projeto com ID ${id} deletado com sucesso` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
