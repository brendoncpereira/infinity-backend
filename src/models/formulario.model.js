module.exports = (sequelize, Sequelize) => {
    const Formulario = sequelize.define('formulario', {
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
        sobrenome: {
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
        senha: {
            type: Sequelize.STRING(50),
            notNull: true
        },

    },

    {
        timestamps: false,
      }
)
    return Formulario
}