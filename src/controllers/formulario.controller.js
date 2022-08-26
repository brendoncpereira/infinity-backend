const formularioService = require('../services/formulario.service')

exports.findAll = async (request, response) => {
    try {
        const formularios = await formularioService.findAll()
        return response.status(200).json({
            status: 200,
            data: formularios,
            message: 'Pesquisas listados com sucesso'
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
        const formularios = await formularioService.findById(id)
        return response.status(200).json({
            status: 200,
            data: formularios,
            message: 'Pesquisa selecionado com sucesso!'
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
        const formularios = await formularioService.create(nome, sobrenome, email, senha)
        response.status(201).send({
            message: "Formulario cadastrado com sucesso!",
            body: {
                user: formularios
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
        
        await formularioService.update(id, nome, sobrenome, email, senha ) 
        
        response.status(200).send({
            message: "Formulário alterado com sucesso!", 

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
        await formularioService.delete(id)
        response.status(200).send({message: "Formulário deletado"})
    } catch(e){
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

