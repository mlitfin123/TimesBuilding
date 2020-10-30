const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const tenantRouter = require('./routes/routes.js')
const authRouter = require('./routes/auth-routes.js')
const PORT = process.env.PORT || 4001
const app = express()

// Apply middleware
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
}))
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(cookieParser());

// Implement route
app.use('/', tenantRouter)
app.use('/', authRouter)

// If 500 error
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something is broken.')
})

// If 404 error
app.use(function (req, res, next) {
    res.status(404).send('Sorry we could not find that.')
})

// Start express app
app.listen(PORT, function() {
    console.log(`Server is running on: ${PORT}`)
})