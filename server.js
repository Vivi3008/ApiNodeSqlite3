const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api', require('./routes'))

app.listen(process.env.PORT || 3000)