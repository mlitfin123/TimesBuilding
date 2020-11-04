const knex = require('./../db')
const connection = require('../config/connection.js');

// Retrieve all tenants
exports.tenantsAll = async (req, res) => {
    knex
        .select('*')
        .from('active_tenants')
        .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({ message: `There was an error retrieving tenants: ${err}` })
    })
}

  // Add new tenant to database
exports.tenantCreate = async (req, res) => {
    knex('active_tenants')
    .insert({
        'tenant': req.body.tenant,
        'website': req.body.website,
        'images': req.body.image,
    })
    .then(() => {
        res.json({ message: `${req.body.tenant}\' created.` })
    })
    .catch(err => {
        res.json({ message: `There was an error creating ${req.body.tenant}: ${err}` })
    })
}

// Remove specific tenant
exports.tenantDelete = async (req, res) => {
    knex('active_tenants')
    .where('id', req.body.id)
    .del()
    .then(() => {
        res.json({ message: `Tenant ${req.body.id} deleted.` })
    })
    .catch(err => {
        res.json({ message: `There was an error deleting ${req.body.id}: ${err}` })
    })
}

// Remove all tenants on the list
exports.tenantReset = async (req, res) => {
    knex
    .select('*')
    .from('active_tenants')
    .truncate()
    .then(() => {
        res.json({ message: 'All tenants cleared.' })
    })
    .catch(err => {
        res.json({ message: `There was an error deleting the tenants: ${err}.` })
    })
}