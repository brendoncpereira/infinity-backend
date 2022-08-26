const router = require('express-promise-router')()
const docenteController = require('../controllers/docente.controller')

router.get('/docentes', docenteController.findAll)
router.get('/docentes/:id', docenteController.findById)
router.post('/docentes', docenteController.create)
router.put('/docentes/:id', docenteController.update)
router.delete('/docentes/:id', docenteController.delete)
router.post('/docenteslogin', docenteController.docenteslogin)

module.exports = router

