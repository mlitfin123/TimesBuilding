const knex = require('./../db')

// Retrieve all tenants
exports.tenantsAll = async (req, res) => {
  // Get all tenants from database
    knex
        .select('*')
        .from('active-tenants')
        .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({ message: `There was an error retrieving tenants: ${err}` })
    })
}

  // Add new tenant to database
exports.tenantCreate = async (req, res) => {
    knex('active-tenants')
    .insert({
        'tenant': req.body.tenant,
        'website': req.body.website,
    })
    .then(() => {
        res.json({ message: `${req.body.tenant}\' created.` })
    })
    .catch(err => {
        res.json({ message: `There was an error creating ${req.body.tenant} book: ${err}` })
    })
}

// Remove specific tenant
exports.tenantDelete = async (req, res) => {
    knex('active-tenants')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
        res.json({ message: `Tenant ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
        res.json({ message: `There was an error deleting ${req.body.id} book: ${err}` })
    })
}

// Remove all tenants on the list
exports.tenantReset = async (req, res) => {
    knex
    .select('*')
    .from('active-tenants')
    .truncate()
    .then(() => {
        res.json({ message: 'All tenants cleared.' })
    })
    .catch(err => {
      // Send a error message in response
        res.json({ message: `There was an error deleting the tenants: ${err}.` })
    })
}