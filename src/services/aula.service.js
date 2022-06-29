const db = require('../models')
const Aula = db.aula

exports.findAll = async () => {
    try{
         const aula = await Aula.findAll({
             attributes:['id', 'data', 'materia'] 
         })
         return aula
    } catch(e){
        throw Error('Ocorreu um erro ao selecionar as aulas. ERROR: ' + e.message)
    }
}

exports.findById = async(id) => {
    try{
        const aula = await Aula.findByPk(id, {
            attributes:['id','data','materia']
        })
        return aula
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar a aula. ERROR: ' + e.message)
    }
}

exports.create = async(data, materia, docenteId, estudanteId) => {
    try{
        const aula = await Aula.create({data:data, materia:materia, docenteId:docenteId, estudanteId:estudanteId})
        return aula
    } catch (e) {
        throw Error('Erro ao inserir a aula: ' + materia + ' ERROR: ' + e.message)
    }
}

exports.update = async (id, data, materia, docenteId, estudanteId) => {
    try {
        await Aula.update(
            {data:data, materia: materia, docenteId: docenteId, estudanteId: estudanteId},
            {where:{id: id}})
    } catch (e) {
        throw Error('Erro ao alterar a aula: ' + materia + ' ERROR: ' + e.message)
    }
}

exports.delete = async (id) => {
    try {
        await Aula.destroy({
            where:{id: id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar a aula. ERROR: ' + e.message)
    }
}