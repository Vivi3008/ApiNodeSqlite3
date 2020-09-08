const express = require('express')
const routes = express.Router()
const WomanController = require('./src/controller/WomanController')


routes.get('/index', WomanController.index)
routes.post('/insert', WomanController.insert)
routes.get('/show/:id', WomanController.showById)
routes.delete('/delete/:id', WomanController.destroy)


module.exports = routes