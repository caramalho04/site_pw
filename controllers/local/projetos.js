const fs = require('fs');

//devolve todos os projetos
exports.getAll = async (req, res) => {
    //ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //devolver os projetos
    return res.send(data.projetos);
}

//devolve o projeto com o id
exports.getById = async (req, res) => {
    //obter o id do projeto
    const id = req.params.id;
    //ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //procurar um projeto com o id
    const projetos = data.projetos.filter(projetos => projetos.id == id);
    //devolve o projeto
    res.send(projetos);
}


//cria um projeto
exports.create = async (req, res) => {
    //obter o projeto pelas características enviadas
    const {id, Nome, Descricao, Estado} = req.body;
     //ler o ficheiro local
     const datajson = fs.readFileSync("data/local/data.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //adicionar projeto à lista
    data.projetos.push(req.body);
    //Criar o novo ficheiro com o projeto adicionado
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //devolve o novo projeto
    return res.status(201).send(req.body);
}

//atualiza o projeto
exports.update = async (req, res) => {
    //obter o projeto pelas características enviadas
    const {id, Marca, Detalhes, Foto} = req.body;
     //ler o ficheiro local
     const datajson = fs.readFileSync("data/local/data.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //procurar o projeto para actualizar
    const projetos = data.projetos.find(projetos => projetos.id == id);
    //atualizar as caraterísticas
    projetos.Nome = Nome;
    projetos.Descricao = Descricao;
    projetos.Estado = Estado;
    //actualizar no ficheiro json
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //devolver o projeto alterado
    return res.send({id, Nome, Descricao, Estado});
}

//apaga o projeto com o id
exports.delete = async (req, res) => {
    //obter o id do projeto
    const id = req.params.id;
     //ler o ficheiro local
     const datajson = fs.readFileSync("data/local/data.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //procurar o indice do projeto a ser procurada
    const projetoIndex  = data.projetos.findIndex(projetos => projetos.id == id);
     // Verifique se o projeto foi encontrado
    if (projetoIndex !== -1) {
        // Exclua o estudante do array de estudantes
        const apagaProjeto = data.projetos.splice(projetoIndex, 1)[0];
        // Atualize o ficheiro json
        fs.writeFileSync('data/local/data.json', JSON.stringify(data));
        // Retorne o projeto excluído como resposta
        return res.status(200).send(apagaProjeto);
    } else {
        // Caso o projeto não seja encontrado, retorne uma resposta de erro
        return res.status(404).send("Projeto não encontrado");
    }
}
