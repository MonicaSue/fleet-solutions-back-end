const router = require('express').Router()
const avsCtrl = require('../controllers/avs.js')
const middleware = require('../middleware/auth.js')


const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/




/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, avsCtrl.index)
router.post('/', checkAuth, avsCtrl.create)
router.put('/:id', checkAuth, avsCtrl.update)
router.delete('/:id', checkAuth, avsCtrl.delete)

module.exports = router