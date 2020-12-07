const knex = require('./../db')

exports.userAuth = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("Success");
    knex.select('*').from('users').where({username: `${username}`, password: `${password}`})
    .then(data => {
        res.json(data)
    })
};