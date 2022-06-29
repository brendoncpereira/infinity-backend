module.exports = (sequelize, Sequelize) => {
    const Docente = sequelize.define('docentes',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING(100),
            notNull: true,
            is:/^[a-zA-z0-9\._]{4, 32}$/,
            unique:true
        },
        username: {
            type: Sequelize.STRING(100),
            notNull: true,
            is:/^[a-zA-z0-9\._]{4, 32}$/,
            unique:true
        },
        email: {
            type: Sequelize.STRING(100),
            notNull: true,
            unique: true
        },
        cpf: {
            type: Sequelize.CHAR(11),
            notNull: true
        },
        senha: {
            type: Sequelize.STRING(50),
            notNull: true
        },
        dt_nascimento: {
            type: Sequelize.DATE(50),
            notNull: true
        },
        descricao: {
            type: Sequelize.STRING(500),
            notNull: true
        },
        curriculo:{
            type: Sequelize.STRING(1000),
            notNull: true
        }
    
    })
    return Docente
}
