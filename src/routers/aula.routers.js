const router = require('express-promise-router')()
const aulaController = require('../controllers/aula.controller')

router.get('/aula', aulaController.findAll)
router.get('/aula/:id', aulaController.findById)
router.post('/aula', aulaController.create)
router.put('/aula/:id', aulaController.update)
router.delete('/aula/:id', aulaController.delete)

module.exports = router

