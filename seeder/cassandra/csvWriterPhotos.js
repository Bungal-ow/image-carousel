const masterArrTrim = require('../masterArrTrim.js');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: './seeder/cassandra/csvFiles/photos.csv',
    header: [{
            id: 'id',
            title: 'id'
        },
        {
            id: 'propId',
            title: 'propId'
        },
        {
            id: 'url',
            title: 'url'
        }, 
        {
            id: 'price',
            title: 'price'
        }, 
        {
            id: 'beds',
            title: 'beds'
        },
        {
            id: 'baths',
            title: 'baths'
        },
        {
            id: 'sqft',
            title: 'sqft'
        }
    ]
});

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let propNum = 1

const generateAllRecords = () => {
    let records = [];

    for (let j = 0; j < masterArrTrim.length; j++) {
        for (let k = 0; k < masterArrTrim[j].length; k++) {

            let uuid = faker.random.uuid();
            let photoURL = masterArrTrim[j][k];
            let price = randomIntFromInterval(250000, 5000000);
            let beds = randomIntFromInterval(2, 7);
            let baths = randomIntFromInterval(1, beds);
            let sqft = randomIntFromInterval(1000, 8000);

            let record = {
                id: uuid,
                propId: propNum,
                url: photoURL,
                price: price,
                beds: beds,
                baths: baths,
                sqft: sqft
            };

            records.push(record);
        }
        propNum++;
    }
    return records;
}

let batches = 0;

let writeInChunks = () => {
    if (batches < 70000) {
        batches += 1;
        let records = generateAllRecords();
        csvWriter.writeRecords(records)
            .then(() => writeInChunks());
    } else {
        console.timeEnd('writeCSV');
        console.log('Great job, Bradley. You have generated the photos CSV for Cassandra');
    }
};

console.time('writeCSV');
writeInChunks();