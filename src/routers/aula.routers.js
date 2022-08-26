const router = require('express-promise-router')()
const aulaController = require('../controllers/aula.controller')

router.get('/aulas', aulaController.findAll)
router.get('/aulas/:id', aulaController.findById)
router.post('/aulas', aulaController.create)
router.put('/aulas/:id', aulaController.update)
router.delete('/aulas/:id', aulaController.delete)

module.exports = router

