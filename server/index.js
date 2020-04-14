require('newrelic');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const express = require('express'); 
const app = express();
const port = 3004;
const bodyParser = require('body-parser');
const path = require('path');
const Controller = require('./controller.js');

app.use(express.static(path.resolve(__dirname, '../dist/')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    //Check if work id is dead
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });

} else {
    // This is Workers can share any TCP connection
    // It will be initialized using express
    console.log(`Worker ${process.pid} started`);

    app.get('/loaderio-fd23cc23d7da2808c4206a8abf75fcd1.txt', (req, res) => {
        res.sendFile(`${__dirname}/loaderio-fd23cc23d7da2808c4206a8abf75fcd1.txt`)
      });
      

    app.get('/api/photos/:propId', Controller.getPhotos)
    app.post('/api/photos/:propId', Controller.addPhoto)
    app.put('/api/photos/:propId/:id', Controller.updatePhoto)
    app.delete('/api/photos/:propId/:id', Controller.deletePhoto)

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}





