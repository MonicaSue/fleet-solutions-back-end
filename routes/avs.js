const router = require('express').Router()
const avsCtrl = require('../controllers/avs.js')
const middleware = require('../middleware/auth.js')


const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/




/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', checkAuth, avsCtrl.create)


module.exports = router