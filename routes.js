const express = require('express')
const routes = express.Router()
const WomanController = require('./src/controller/WomanController')


routes.get('/index', WomanController.index)
routes.post('/insert', WomanController.insert)

module.exports = routes