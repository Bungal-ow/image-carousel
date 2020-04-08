const express = require('express')
const handlers = require('./controller.js')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const path = require('path')
const Controller = require('./controller.js')


app.use(express.static(path.resolve(__dirname, '../dist/')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/api/photos', Controller.getPhotos)
app.post('/api/photos', Controller.addPhoto)
app.put('/api/photos', Controller.updatePhoto)
app.delete('/api/photos', Controller.deletePhoto)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))