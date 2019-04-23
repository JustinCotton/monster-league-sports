const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const routes = require('./routes/index.js')
const apiRoutes = require('./routes/api.js')

// Register middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.use(logger('dev'))

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs')

app.use('/', routes)
app.use('/api/v1', apiRoutes)

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})