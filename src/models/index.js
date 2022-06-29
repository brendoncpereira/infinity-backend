const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.DIALECT,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.estudantes = require('./estudante.model')(db.sequelize, db.Sequelize)
db.estudantes.sync()
db.docente = require('./docentes.model')(db.sequelize, db.Sequelize)
db.docente.sync()
db.aula = require('./aula.model.js')(db.sequelize, db.Sequelize)
db.aula.sync()

db.docente.hasMany(db.aula, { as: "aulas"})
db.estudantes.hasMany(db.aula, { as: "aulas"})
db.aula.belongsTo(db.estudantes && db.docente ,{
    foreignKey: "docenteId",
    as: "docentes",
    foreignKey:"estudanteId",
    as: 'estudantes'
})


const run = async() =>{
}

db.sequelize.sync({force: true}).then(() => {
    console.log("Updating");
    run()
})

module.exports = db