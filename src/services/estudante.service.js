const db = require('../models')
const Estudante = db.estudantes

exports.findAll = async () => {
    try{
         const estudantes = await Estudante.findAll({
            attributes:['id','nome', 'sobrenome', 'email', 'senha']
         })
         return estudantes
    } catch(e){
        throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
    }
}

exports.findById = async(id) => {
    try{
        const estudantes = await Estudante.findByPk(id, {
            attributes:['id','nome', 'sobrenome', 'email', 'senha']
        })
        return estudantes
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar o usuário. ERROR: ' + e.message)
    }
}

exports.create = async(nome, sobrenome, email, senha,) => {
    try{
        const estudantes = await Estudante.create({nome: nome, sobrenome: sobrenome, email: email, senha: senha})
        return estudantes
    } catch (e) {
        throw Error('Erro ao inserir o usuário: ' + username + ' ERROR: ' + e.message)
    }
}

exports.update = async (id, nome, sobrenome, email, senha) => {
    try {
        await Estudante.update(
            {nome: nome, sobrenome: sobrenome, email: email, senha: senha},
            {where:{id: id}})
    } catch (e) {
        throw Error('Erro ao alterar o usuário: ' + username + ' ERROR: ' + e.message)
    }
}

exports.delete = async (id) => {
    try {
        await Estudante.destroy({
            where:{id: id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar o usuário. ERROR: ' + e.message)
    }
}

exports.estudanteslogin = async(email, senha) => {
    try{
        const estudante = await Estudante.findAll({
            where:{
                email: email,
                senha: senha
            }
        })
        console.log(estudante);
        if (estudante.length === 0) {
            throw('[SERVICE] Estudante inexistente.')
        }
        return estudante
    } catch (e) {
        throw `[SERVICE] Erro ao efetuar o login do estudante. ERROR: ${e.message}`
    }
}