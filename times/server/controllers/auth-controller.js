const knex = require('./../db')

exports.userAuth = async (req, res) => {
    knex('users')
    .where('username', req.body.username)
    .where('password', req.body.password)
        .then(function (user) {
            console.log(res)
            if (user) {
                res.redirect('/admin');
                res.json({ message: `User ${username} logged in.` })
            } else {
                res.send('Incorrect password');
                res.redirect('/');
                res.json({ message: `User ${username} username/password incorrect.` })
        }
    })
    .catch(err => {
        res.json({ message: `There was an error logging ${req.body.username}: ${err}` })
    })
}