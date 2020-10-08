const express = require('express')
const routes = express.Router()
const cors = require('cors')

const WomanController = require('./src/controller/WomanController')


routes.get('/index', cors(), WomanController.index)
routes.post('/insert', WomanController.insert)
routes.get('/show/:id', cors(), WomanController.showById)
routes.delete('/delete/:id', WomanController.destroy)


module.exports = routes