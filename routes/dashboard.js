const router = require('express').Router()
const dashboardCtrl = require('../controllers/dashboard.js')
const middleware = require('../middleware/auth.js')


const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/




/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, dashboardCtrl.index)

module.exports = router