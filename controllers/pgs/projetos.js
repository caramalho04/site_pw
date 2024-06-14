const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//Testa a ligação
exports.testConnection = async (req, res) => {
    try {
        await prisma.$connect();
        res.send('Ligação bem-sucedida com o PostgreSQL!');
      } catch (error) {
        res.send('Erro ao conectar ao PostgreSQL:', error);
      } finally {
        await prisma.$disconnect();
      }
}
//Devolve todos os projetos
exports.getAll = async (req, res) => {
    try {
        //le toda a tabela
        const response = await prisma.projetos.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//Devolve um projeto indicado por um id
exports.getById = async (req, res) => {
    //apanha o id enviado
    const id = req.params.id*1;
    try {
        //procura o projeto com o id
        const response = await prisma.projetos.findUnique({
            where: {
                id: id,
            },
        })
        //devolve o projeto
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
//criar um projeto
exports.create = async (req, res) => {
    //apanhar os dados enviados
    const { Marca, Detalhes, Foto } = req.body;
    try {
        //criar um novo projeto
        const projeto = await prisma.projetos.create({
            data: {
                Marca: Marca,
                Detalhes: Detalhes,
                Foto: Foto
            },
        })
        //devolve o projeto criado
        res.status(201).json(projeto)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
//Atualizar um projeto
exports.update = async (req, res) => {
    const { id, Marca, Detalhes, Foto } = req.body;

    try {
        //procurar o projeto com id e atualizar os dados
        const projeto = await prisma.projetos.update({
            where: {
                id: id*1,
            },
            data: {
                Marca: Marca,
                Detalhes: Detalhes,
                Foto: Foto
            },
        })
        //devolve o projeto atualizado
        res.status(200).json(projeto)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
//apagar o projeto com id passado
exports.delete = async (req, res) => {
    //le o id do projeto
    const id = req.params.id;
    try {
        //delete student
        await prisma.projetos.delete({
            where: {
                id: id*1,
            },
        })
        //just return ok
        res.status(200).send("ok");
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}



