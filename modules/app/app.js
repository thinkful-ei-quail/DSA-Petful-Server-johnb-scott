const express = require('express')
const cors = require('cors')
const CLIENT_ORIGIN = require('../../config')
const app = express()

app.use(cors())

app.use('/people', require('../people/people.router'))
app.use('/pets', require('../pets/pets.router'))

module.exports = app
