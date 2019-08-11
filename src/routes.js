const express = require('express')

const PoliticanController = require('./controllers/PoliticianController')

const routes = express.Router()

routes.get('/', PoliticanController.show)

module.exports = routes
