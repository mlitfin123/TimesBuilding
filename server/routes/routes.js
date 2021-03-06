const express = require('express')

const tenantRoutes = require('./../controllers/tenant-controller.js')
const spaceRoutes = require('./../controllers/space-controller.js')

const router = express.Router()

router.get('/all', tenantRoutes.tenantsAll)

router.post('/create', tenantRoutes.tenantCreate)

router.put('/delete', tenantRoutes.tenantDelete)

router.put('/reset', tenantRoutes.tenantReset)

router.get('/spaceall', spaceRoutes.spaceAll)

router.post('/spacemodify', spaceRoutes.spaceModify)

module.exports = router