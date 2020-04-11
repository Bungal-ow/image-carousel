const models = require('../db/models.js')

//create photos
const addPhoto = (req, res) => {
    models.insertPhoto(req.body.url, req.body.propId, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).end(`Successfully added photo`);
        }
    })
}

//read photos
const getPhotos = (req, res) => {
    models.fetchPhotos(req.params.propId, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(results.rows);
        }
    });
}   

//update photo
const updatePhoto = (req, res) => {
    let id = req.params.id;
    let url = req.body.url;

    models.changePhotoURL(id, url, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).end('Successfully updated photo');
        }
    });
}

//delete photo
const deletePhoto = (req, res) => {
    models.removePhoto(req.params.id, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).end('Successfully deleted photo');
        }
    })
}

module.exports = {
    addPhoto,
    getPhotos,
    updatePhoto,
    deletePhoto
};