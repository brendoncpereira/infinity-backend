const router = require('express-promise-router')()
const formularioController = require('../controllers/formulario.controller')

router.get('/formularios', formularioController.findAll)
router.get('/formularios/:id', formularioController.findById)
router.post('/formularios', formularioController.create)
router.put('/formularios/:id', formularioController.update)
router.delete('/formularios/:id', formularioController.delete)


module.exports = router

