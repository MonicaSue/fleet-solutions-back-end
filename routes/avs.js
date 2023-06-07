const router = require('express').Router()
const avsCtrl = require('../controllers/avs.js')
const middleware = require('../middleware/auth.js')


const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/




/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, avsCtrl.index)
router.post('/', checkAuth, avsCtrl.create)
router.post('/:id/performances', checkAuth, avsCtrl.createPerformance)
router.post('/:id/maintenances', checkAuth, avsCtrl.createMaintenance)
router.get('/:id', checkAuth, avsCtrl.show)
router.put('/:id', checkAuth, avsCtrl.update)
router.put('/:id/maintenances/:maintenanceId', checkAuth, avsCtrl.updateMaintenance)
router.delete('/:id', checkAuth, avsCtrl.delete)

module.exports = router