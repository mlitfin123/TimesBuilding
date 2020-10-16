const express = require('express')

const tenantRoutes = require('./../controllers/tenant-controller.js')

const router = express.Router()

router.get('/all', tenantRoutes.tenantsAll)

router.post('/create', tenantRoutes.tenantCreate)

router.put('/delete', tenantRoutes.tenantDelete)

router.put('/reset', tenantRoutes.tenantReset)

module.exports = router