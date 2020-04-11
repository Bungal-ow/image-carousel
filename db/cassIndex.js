const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'listings'
});


// Create

const insertPhoto = (propId, price, beds, baths, sqft) => {
    const query = 'INSERT INTO photos (propId, id, price, beds, baths, sqft) VALUES (?, uuid(), ?, ?, ?, ?';
    client.execute(query, [propId, price, beds, baths, sqft], {
            prepare: true
        })
        .then((result) => console.log('Photo inserted into database'))
        .catch((err) => console.log(err));
}


// Read

const getPhotos = (propId) => {
    const query = 'SELECT * FROM photos WHERE propId = ?';
    client.execute(query, [propId])
        .then((result) => console.log(`Photos for propId: ${propId} retrieved from database`, result));
}


// Update 

const updateProperty = (propId) => {
    const query = 'INSERT INTO photos () VALUES (?, ?, ?, ?, ?)';
    client.execute(query, [propid], {
            prepare: true
        })
        .then((result) => console.log('Property updated in database'))
        .catch((err) => console.log(err));
}


// Delete 

const removePhoto = (propertyId) => {
    const query = 'SELECT * FROM listings WHERE listingId = ?';
    client.execute(query, (err, result) => {
        assert.ifError(err);
        console.log('Photo deleted from database', result);
    });
}


module.exports = {
    getPhotos,
    insertPhoto,
    updateProperty,
    removePhoto,
}