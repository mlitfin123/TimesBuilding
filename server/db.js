// const path = require('path')
// require ('./config/config.js')

// // Get the location of database.sqlite file
// const dbPath = path.resolve(__dirname, '../build/db/db.sqlite')

var mysql = require('mysql');
var knex = mysql.createConnection("mysql://rqvvax6aty2vtjom:e2bfjo211ui074jf@etdq12exrvdjisg6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/v616tm7lugqawl9p");

knex.connect();

// Create connection to database
// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//         database: "mysql://rqvvax6aty2vtjom:e2bfjo211ui074jf@etdq12exrvdjisg6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/v616tm7lugqawl9p"
//     },
//     useNullAsDefault: true
// })

function tenantSchema() {knex.schema
        .hasTable('active_tenants')
        .then((exists) => {
            if (!exists) {

            return knex.schema.createTable('active_tenants', (table)  => {
                table.increments('id').primary()
                table.string('tenant').notNullable()
                table.string('website')
                table.binary("images")
            })
            .then(() => {
                console.log('Tenant table Successfully Created!')
            })
            .catch((error) => {
                console.error(`There was an error creating table: ${error}`)
            })
            }
        })
        .then(() => {
            console.log('done')
        })
        .catch((error) => {
            console.error(`There was an error setting up the database: ${error}`)
        })
    }
function spaceSchema() {
    knex.schema
    .hasTable('open_offices')
    .then((exists) => {
        if (!exists) {
        return knex.schema.createTable('open_offices', (table)  => {
            table.increments('id').primary()
            table.string('space')
            table.integer('is_open')
        })
        .then(() => {
            knex('open_offices').insert(
                {space: "basement", is_open: "-1"})
                .then( async function (res) {
                    await(5)
                    res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "suite101", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "suite102", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "suite103", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "suite201", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "suite202", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "suite203/204", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "suite205", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "suite206", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "suite206a", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "suite206b", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "suite207", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "suite208", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "suite209", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "61eastmain", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "61.5 eastmain", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                    knex('open_offices').insert(
                    {space: "65eastmain", is_open: "-1"})
                    .then( async function (res) {
                        await(5)
                        res.json({ success: true, message: 'ok' });     // respond back to request
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
            console.log('Spaces Table Successfully Created!')
        })
        .catch((error) => {
            console.error(`There was an error creating table: ${error}`)
        })
        }
    })
    .then(() => {
        console.log('done')
    })
    .catch((error) => {
        console.error(`There was an error setting up the database: ${error}`)
    })
}
function login() {knex.schema
    .hasTable('users')
    .then((exists) => {
        if (!exists) {

        return knex.schema.createTable('users', (table)  => {
            table.increments('id').primary()
            table.string('username').notNullable()
            table.string('password').notNullable()
        })
        .then(() => {
            knex('users').insert(
                {username: "admin", password: "password"})
                .then( function (res) {
                    res.json({ success: true, message: 'ok' });     // respond back to request
                })
                .catch((error) => {
                    console.error(`There was an error creating table: ${error}`)
                })
            console.log('Tenant table Successfully Created!')
        })
        .catch((error) => {
            console.error(`There was an error creating table: ${error}`)
        })
        }
    })
    .then(() => {
        console.log('done')
    })
    .catch((error) => {
        console.error(`There was an error setting up the database: ${error}`)
    })
}

tenantSchema();
login();
spaceSchema();

knex.select('*').from('active_tenants')
    .then(data => console.log('data:', data))
    .catch(err => console.log(err))

knex.select('*').from('open_offices')
    .then(data => console.log('data:', data))
    .catch(err => console.log(err))
    
knex.select('*').from('users')
    .then(data => console.log('data:', data))
    .catch(err => console.log(err))

module.exports = knex