const router = require('express-promise-router')()
const docenteController = require('../controllers/docente.controller')

router.get('/docente', docenteController.findAll)
router.get('/docente/:id', docenteController.findById)
router.post('/docente', docenteController.create)
router.put('/docente/:id', docenteController.update)
router.delete('/docente/:id', docenteController.delete)
router.post('/docenteslogin', docenteController.docenteslogin)

module.exports = router

