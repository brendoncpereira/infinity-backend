const db = require('../models')
const Docente = db.docente
 
exports.findAll = async () => {
    try{
         const docentes = await Docente.findAll({
             attributes:['id', 'nome',  'email', 'senha', 'dt_nascimento', 'descricao', 'curriculo']
         })
         return docentes
    } catch(e){
        throw Error('Ocorreu um erro ao selecionar os docentes. ERROR: ' + e.message)
    }
}
 
exports.findById = async(id) => {
    try{
        const docente = await Docente.findByPk(id, {
            attributes:['id', 'nome',  'email', 'senha', 'dt_nascimento', 'descricao', 'curriculo']
        })
        return docente
    } catch (e) {
        throw Error('Ocorreu um erro ao selecionar o usuário. ERROR: ' + e.message)
    }
}
 
exports.create = async(nome,  email,  senha, dt_nascimento, descricao, curriculo) => {
    try{
        const docente = await Docente.create({nome: nome,  email: email,  senha: senha, dt_nascimento: dt_nascimento,descricao: descricao, curriculo: curriculo})
        return docente
    } catch (e) {
        throw Error('Erro ao inserir o usuário: ' + email + ' ERROR: ' + e.message)
    }
}
 
exports.update = async (id, nome,  email, senha, dt_nascimento, descricao, curriculo) => {
    try {
        await Docente.update(
            {nome: nome, email: email, senha: senha, dt_nascimento: dt_nascimento, descricao: descricao, curriculo: curriculo},
            {where:{id: id}})
    } catch (e) {
        throw Error('Erro ao alterar o usuário: ' + email + ' ERROR: ' + e.message)
    }
}
 
exports.delete = async (id) => {
    try {
        await Docente.destroy({
            where:{id: id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar o usuário. ERROR: ' + e.message)
    }
}
 
exports.docenteslogin = async(email, senha) => {
    try{
        const docente = await Docente.findAll({
            where:{
                email: email,
                senha: senha
            }
        })
        console.log(docente);
        if (docente.length === 0) {
            throw('[SERVICE] Docente inexistente.')
        }
        return docente
    } catch (e) {
        throw `[SERVICE] Erro ao efetuar o login do docente. ERROR: ${e.message}`
    }
}
