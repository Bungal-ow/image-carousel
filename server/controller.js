const models = require('../db/model.js')

//create photos
const addPhoto = (req, res) => {
    models.insertPhoto(req.body, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).end(`Successfully posted`);
        }
    })
}

//read photos
const getPhotos = (req, res) => {
    models.fetchPhotos(req.params.propid, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(results.rows);
        }
    });
};

//update photo
const updatePhoto = (req, res) => {
    let data = {
        id: req.params.id,
        url: req.body.url
    };
    models.changePhotoURL(data, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).end('Successfully updated');
        }
    });
}

//delete photo
const deletePhoto = (req, res) => {
    models.removePhoto(req.params.id, (err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).end('Successfully deleted');
        }
    })
}

module.exports = {
    addPhoto,
    getPhotos,
    updatePhoto,
    deletePhoto
};