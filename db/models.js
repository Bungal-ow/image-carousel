const pool = require('./index.js')

// Create
const insertPhoto = (url, propId, callback) => {
    const query = 'INSERT INTO photos (propId, url) VALUES ($1, $2)';
    pool.query(query, [propId, url], callback)
}


// Read
const fetchPhotos = (propId, callback) => {
    const query = 'SELECT * FROM photos WHERE propId = $1';
    pool.query(query, [propId], callback)
}


// Update 
const updatePhoto = (url, id, callback) => {
    const query = 'UPDATE photos SET url = $1 WHERE id = $2';
    pool.query(query, [url, id], callback);
}


// Delete 
const removePhoto = (id, callback) => {
    const query = 'DELETE FROM photos WHERE id = $1';
    pool.query(query, [id], callback);
}


module.exports = {
    fetchPhotos,
    insertPhoto,
    updatePhoto,
    removePhoto,
}