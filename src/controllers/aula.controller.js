const aulaService = require('../services/aula.service')

exports.findAll = async (request, response) => {
    try {
        const aula = await aulaService.findAll()
        return response.status(200).json({
            status: 200,
            data: aula,
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
        const aula = await aulaService.findById(id)
        response.status(200).json({
            status: 200,
            data: aula,
            message: 'Aula selecionada com sucesso!'
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
        const { data, materia, docenteId, estudanteId} = request.body
        const aula = await aulaService.create(data, materia, docenteId, estudanteId)
        response.status(201).send({
            message: "Aula cadastrada com sucesso!",
            body: {
                aula: aula
            }
        })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: "Erro ao cadastrar a aula. ERROR: " + e.message
        })
    }
}

exports.update = async(request, response) => {
    try{
        const id = parseInt(request.params.id)
        const {data, materia, docenteId, estudanteId} = request.body
    
        await aulaService.update(id, data, materia, docenteId , estudanteId)    
        response.status(200).send({
            message: "Aula alterada com sucesso!", 
            body:{
                data:data, 
                materia: materia,
                docenteId: docenteId,
                estudanteId: estudanteId
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
        await aulaService.delete(id)
        response.status(200).send({message: "Aula deletada"})
    } catch(e){
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}