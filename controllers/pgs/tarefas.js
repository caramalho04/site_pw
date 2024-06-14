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
//Devolve todos os tarefas
exports.getAll = async (req, res) => {
    try {
        //le toda a tabela
        const response = await prisma.tarefas.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//Devolve um tarefa indicado por um id
exports.getById = async (req, res) => {
    //apanha o id enviado
    const id_tarefa = req.params.id_tarefa*1;
    try {
        //procura o tarefa com o id
        const response = await prisma.tarefas.findUnique({
            where: {
                id_tarefa: id_tarefa,
            },
        })
        //devolve o tarefa
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
//criar um tarefa
exports.create = async (req, res) => {
    //apanhar os dados enviados
    const { NomeTarefa, Descricao, DataInicio, DataFim, Estado } = req.body;
    try {
        //criar um novo tarefa
        const tarefa = await prisma.tarefas.create({
            data: {
                NomeTarefa: NomeTarefa,
                Descricao: Descricao,
                DataInicio: DataInicio,
                DataFim: DataFim,
                Estado: Estado
            },
        })
        //devolve o tarefa criado
        res.status(201).json(tarefa)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
//Atualizar um tarefa
exports.update = async (req, res) => {
    const { NomeTarefa, Descricao, DataInicio, DataFim, Estado } = req.body;

    try {
        //procurar o tarefa com id e atualizar os dados
        const tarefa = await prisma.tarefas.update({
            where: {
                id_tarefa: id_tarefa*1,
            },
            data: {
                NomeTarefa: NomeTarefa,
                Descricao: Descricao,
                DataInicio: DataInicio,
                DataFim: DataFim,
                Estado: Estado
            },
        })
        //devolve o tarefa atualizado
        res.status(200).json(tarefa)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
//apagar o tarefa com id passado
exports.delete = async (req, res) => {
    //le o id do tarefa
    const id = req.params.id_tarefa;
    try {
        //delete student
        await prisma.tarefas.delete({
            where: {
                id_tarefa: id_tarefa*1,
            },
        })
        //just return ok
        res.status(200).send("ok");
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}



