const knex = require('./../db')

// Retrieve all spaces
exports.spaceAll = async (req, res) => {
    knex
        .select('*')
        .from('open-offices')
        .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({ message: `There was an error retrieving space: ${err}` })
    })
}

  // Add new space to database
exports.spaceCreate = async (req, res) => {
    knex('open-offices')
    .insert({
        'space': req.body.space,
        'website': req.body.website,
    })
    .then(() => {
        res.json({ message: `${req.body.space}\' created.` })
    })
    .catch(err => {
        res.json({ message: `There was an error creating ${req.body.space}: ${err}` })
    })
}

// Remove specific space
exports.spaceDelete = async (req, res) => {
    knex('open-offices')
    .where('id', req.body.id)
    .del()
    .then(() => {
        res.json({ message: `space ${req.body.id} deleted.` })
    })
    .catch(err => {
        res.json({ message: `There was an error deleting ${req.body.id}: ${err}` })
    })
}

// Remove all spaces on the list
exports.spaceReset = async (req, res) => {
    knex
    .select('*')
    .from('open-offices')
    .truncate()
    .then(() => {
        res.json({ message: 'All spaces cleared.' })
    })
    .catch(err => {
        res.json({ message: `There was an error deleting the space: ${err}.` })
    })
}