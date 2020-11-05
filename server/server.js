const express = require('express')
const cookieParser = require("cookie-parser");
const compression = require('compression')
const cors = require('cors')
const path = require('path')
const tenantRouter = require('./routes/routes.js')
const authRouter = require('./routes/auth-routes.js')
const PORT = process.env.PORT || 4001
const app = express()

// Apply middleware
app.use(cors({
    methods: ["GET", "POST", "PUT"],
    credentials: true,
}))
app.use(compression())
app.use(express.json())
app.use(cookieParser());
app.use(express.static("client/build"));

// Implement route
app.use('/', tenantRouter)
app.use('/', authRouter)

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

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