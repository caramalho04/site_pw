const fs = require('fs');

//devolve todos os tarefas
exports.getAll = async (req, res) => {
    //ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data_tarefas.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //devolver os tarefas
    return res.send(data.tarefas);
}

//devolve o tarefa com o id
exports.getById = async (req, res) => {
    //obter o id do tarefa
    const id_tarefa = req.params.id_tarefa;
    //ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data_tarefas.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //procurar um tarefa com o id
    const tarefas = data.tarefas.filter(tarefas => tarefas.id_tarefa == id_tarefa);
    //devolve o tarefa
    res.send(tarefas);
}


//cria um tarefa
exports.create = async (req, res) => {
    //obter o tarefa pelas características enviadas
    const {id_tarefa, NomeTarefa, Descricao, DataInicio, DataFim, Estado} = req.body;
     //ler o ficheiro local
     const datajson = fs.readFileSync("data/local/data_tarefas.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //adicionar tarefa à lista
    data.tarefas.push(req.body);
    //Criar o novo ficheiro com o tarefa adicionado
    fs.writeFileSync('data/local/data_tarefas.json', JSON.stringify(data));
    //devolve o novo tarefa
    return res.status(201).send(req.body);
}

//atualiza o tarefa
exports.update = async (req, res) => {
    //obter o tarefa pelas características enviadas
    const {id_tarefa, NomeTarefa, Descricao, DataInicio, DataFim, Estado} = req.body;
     //ler o ficheiro local
     const datajson = fs.readFileSync("data/local/data_tarefas.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //procurar o tarefa para actualizar
    const tarefas = data.tarefas.find(tarefas => tarefas.id == id_tarefa);
    //atualizar as caraterísticas
    tarefas.NomeTarefa = NomeTarefa;
    tarefas.Descricao = Descricao;
    tarefas.DataInicio = DataInicio;
    tarefas.DataFim = DataFim;
    tarefas.Estado = Estado;
    //actualizar no ficheiro json
    fs.writeFileSync('data/local/data_tarefas.json', JSON.stringify(data));
    //devolver o tarefa alterado
    return res.send({id_tarefa, NomeTarefa, Descricao, DataInicio, DataFim, Estado});
}

//apaga o tarefa com o id
exports.delete = async (req, res) => {
    //obter o id do tarefa
    const id_tarefa = req.params.id_tarefa;
     //ler o ficheiro local
     const datajson = fs.readFileSync("data/local/data_tarefas.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //procurar o indice do tarefa a ser procurada
    const tarefaIndex  = data.tarefas.findIndex(tarefas => tarefas.id == id_tarefa);
     // Verifique se o tarefa foi encontrado
    if (tarefaIndex !== -1) {
        // Exclua o estudante do array de estudantes
        const apagatarefa = data.tarefas.splice(tarefaIndex, 1)[0];
        // Atualize o ficheiro json
        fs.writeFileSync('data/local/data_tarefas.json', JSON.stringify(data));
        // Retorne o tarefa excluído como resposta
        return res.status(200).send(apagatarefa);
    } else {
        // Caso o tarefa não seja encontrado, retorne uma resposta de erro
        return res.status(404).send("tarefa não encontrado");
    }
}
