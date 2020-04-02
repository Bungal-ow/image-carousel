const express = require('express')
const handlers = require('./handlers.js')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const path = require('path')


app.use(express.static(path.resolve(__dirname, '../dist/')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/api/property', handlers.handleGet)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))