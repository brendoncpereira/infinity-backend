module.exports = (sequelize, Sequelize) => {
    const Aula = sequelize.define('aula', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dataaula: {
            type: Sequelize.STRING(100),
            notNull: true
        },
        hora: {
            type: Sequelize.STRING(100),
            notNull: true
        },
        materia: {
            type: Sequelize.STRING(100),
            notNull: true
        },

    },
    

    {
        timestamps: false,
      }
)
    return Aula
}