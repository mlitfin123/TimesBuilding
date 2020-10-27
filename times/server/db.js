const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/db.sqlite')

// Create connection to SQLite database
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
    filename: dbPath,
    },
    useNullAsDefault: true
})

function tenantSchema() {knex.schema
        .hasTable('active-tenants')
        .then((exists) => {
            if (!exists) {

            return knex.schema.createTable('active-tenants', (table)  => {
                table.increments('id').primary()
                table.string('tenant')
                table.string('website')
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

function spaceSchema() {knex.schema
    .hasTable('open-offices')
    .then((exists) => {
        if (!exists) {

        return knex.schema.createTable('open-offices', (table)  => {
            table.increments('id').primary()
            table.string('space')
            table.integer('is_open')
        })
        .then(() => {
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
tenantSchema();
spaceSchema();

knex.select('*').from('active-tenants')
    .then(data => console.log('data:', data))
    .catch(err => console.log(err))

knex.select('*').from('open-offices')
    .then(data => console.log('data:', data))
    .catch(err => console.log(err))

module.exports = knex