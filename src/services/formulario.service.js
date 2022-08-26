const db = require('../models')
const Formularios = db.formularios

exports.findAll = async () => {
    try{
         const formularios = await Formulario.findAll({
            attributes:['id','nome', 'sobrenome', 'email', 'senha']
         })
         return formularios
    } catch(e){
        throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
    }
}

exports.findById = async(id) => {
    try{
        const formularios = await Formulario.findByPk(id, {
            attributes:['id','nome', 'sobrenome', 'email', 'senha']
        })
        return formularios
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar o usuário. ERROR: ' + e.message)
    }
}

exports.create = async(nome, sobrenome, email, senha,) => {
    try{
        const formularios = await Formulario.create({nome: nome, sobrenome: sobrenome, email: email, senha: senha})
        return formularios
    } catch (e) {
        throw Error('Erro ao inserir o usuário: ' + email + ' ERROR: ' + e.message)
    }
}

exports.update = async (id, nome, sobrenome, email, senha) => {
    try {
        await Formulario.update(
            {nome: nome, sobrenome: sobrenome, email: email, senha: senha},
            {where:{id: id}})
    } catch (e) {
        throw Error('Erro ao alterar o usuário: ' + email + ' ERROR: ' + e.message)
    }
}

exports.delete = async (id) => {
    try {
        await Formulario.destroy({
            where:{id: id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar o usuário. ERROR: ' + e.message)
    }
}

