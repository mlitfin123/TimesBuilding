const knex = require('./../db')

exports.spaceModify = async (req, res) => {
    knex.raw(`UPDATE "open-offices" SET is_open = is_open * -1 WHERE id = ${req.body.id}; SELECT * FROM "open-offices"`)
        .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({ message: `There was an error modifying space: ${err}` })
    })
}

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