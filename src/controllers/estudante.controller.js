const estudanteService = require('../services/estudante.service')

exports.findAll = async (request, response) => {
    try {
        const estudantes = await estudanteService.findAll()
        return response.status(200).json({
            status: 200,
            data: estudantes,
            message: 'Estudantes listados com sucesso'
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.findById = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const estudantes = await estudanteService.findById(id)
        return response.status(200).json({
            status: 200,
            data: estudantes,
            message: 'Usuário selecionado com sucesso!'
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.create = async (request, response) => {
    try {
        const { nome, sobrenome, email, senha } = request.body
        const estudantes = await estudanteService.create(nome, sobrenome, email, senha)
        response.status(201).send({
            message: "Usuário cadastrado com sucesso!",
            body: {
                user: estudantes
            }
        })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: "Erro ao cadastrar o usuário. ERROR: " + e.message
        })
    }
}

exports.update = async(request, response) => {
    try{
        const id = parseInt(request.params.id)
        const {nome, sobrenome, email, senha } = request.body
    
        await estudanteService.update(id, nome, sobrenome, email, senha )    
        response.status(200).send({
            message: "Usuário alterado com sucesso!", 
            body:{
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                senha: senha
            }
        })
    } catch(e){
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.delete = async(request, response) => {
    try{
        const id = parseInt(request.params.id)
        await estudanteService.delete(id)
        response.status(200).send({message: "Usuário deletado"})
    } catch(e){
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.estudanteslogin = async (request, response) => {
    try {
        const { email, senha } = request.body
        const estudantes = await estudanteService.estudanteslogin(email, senha)
        return response.status(201).send({
            message: 'Pesquisa realizada com sucesso!',
            body:{
                estudantes: estudantes
            }
        })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: "[CONTROLLER] Erro ao realizar pesquisa. ERROR: " + e
        })
    }
}