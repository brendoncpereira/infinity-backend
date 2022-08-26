const express = require('express')
const cors = require('cors')
const app = express()

const index = require('./routers/index')
const estudanteRouters = require('./routers/estudante.routers')
const docenteRouters = require('./routers/docente.routers')
const aulaRouters = require('./routers/aula.routers')
const formularioRouters = require('./routers/formulario.routers')



app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.json({type: 'application/vnd.api+json'}))
app.use(cors())

app.use(index)
app.use('/api/', estudanteRouters)
app.use('/api/', docenteRouters)
app.use('/api/', aulaRouters)
app.use('/api/', formularioRouters)


module.exports = app
