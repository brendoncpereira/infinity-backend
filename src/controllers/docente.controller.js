const docenteService = require('../services/docente.service')
 
exports.findAll = async (request, response) => {
    try {
        const docentes = await docenteService.findAll()
        return response.status(200).json({
            status: 200,
            data: docentes,
            message: 'Usuários listados com sucesso'
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
        const docentes = await docenteService.findById(id)
        response.status(200).json({
            status: 200,
            data: docentes,
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
        const { nome, email,  senha, dt_nascimento, descricao, curriculo } = request.body
        const docentes = await docenteService.create(nome,  email,  senha, dt_nascimento, descricao, curriculo)
        response.status(201).send({
            message: "Usuário cadastrado com sucesso!",
            body: {
                docentes: docentes
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
        const {nome, email,  senha, dt_nascimento, descricao, curriculo } = request.body
   
        await docenteService.update(id, nome, email,  senha, dt_nascimento, descricao, curriculo )    
        response.status(200).send({
            message: "Usuário alterado com sucesso!",
            body:{
                nome: nome,
                email: email,
                senha: senha,
                dt_nascimento: dt_nascimento,
                descricao: descricao,
                curriculo: curriculo
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
        await docenteService.delete(id)
        response.status(200).send({message: "Usuário deletado"})
    } catch(e){
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}
 
exports.docenteslogin = async (request, response) => {
    try {
        const { email, senha } = request.body
        const docentes = await docenteService.docenteslogin(email, senha)
        return response.status(201).send({
            message: 'Pesquisa realizada com sucesso!',
            body:{
                docentes: docentes
            }
        })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: "[CONTROLLER] Erro ao realizar pesquisa. ERROR: " + e
        })
    }
}
 
