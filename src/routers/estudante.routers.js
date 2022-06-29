const router = require('express-promise-router')()
const estudanteController = require('../controllers/estudante.controller')

router.get('/estudantes', estudanteController.findAll)
router.get('/estudantes/:id', estudanteController.findById)
router.post('/estudantes', estudanteController.create)
router.put('/estudantes/:id', estudanteController.update)
router.delete('/estudantes/:id', estudanteController.delete)
router.post('/estudanteslogin', estudanteController.estudanteslogin)


module.exports = router

