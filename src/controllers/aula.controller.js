const aulaService = require('../services/aula.service')

exports.findAll = async (request, response) => {
    try {
        const aula = await aulaService.findAll()
        return response.status(200).json({
            status: 200,
            data: aula,
            message: 'Aulas listadas com sucesso'
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
        const { dataaula, materia, hora, docenteId, estudanteId} = request.body
        const aula = await aulaService.create(dataaula, materia,hora,  docenteId, estudanteId)
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
        const {dataaula, materia, hora,  docenteId, estudanteId} = request.body
    
        await aulaService.update(id, dataaula, hora,  materia, docenteId , estudanteId)    
        response.status(200).send({
            message: "Aula alterada com sucesso!", 
            body:{
                dataaula:dataaula, 
                materia: materia,
                hora:hora,
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