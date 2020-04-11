const masterArrTrim = require('../masterArrTrim.js')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: './seeder/postgres/csvFiles/photos2.csv',
    header: [{
            id: 'propId',
            title: 'propId'
        },
        {
            id: 'id',
            title: 'id'
        },
        {
            id: 'url',
            title: 'url'
        }
    ]
});

let num = 55250001;
let propNum = 5000001;

const generateAllRecords = () => {
    let records = [];

    for (let j = 0; j < masterArrTrim.length; j++) {
        for (let k = 0; k < masterArrTrim[j].length; k++) {
            let photoURL = masterArrTrim[j][k].slice(59);

            let record = {
                propId: propNum,
                id: num,
                url: photoURL
            };
            num++
            records.push(record);
        }
        propNum++;
    }

    return records;
}


let batches = 0;

let writeInChunks = () => {
    if (batches < 50000) {
        batches += 1;
        let records = generateAllRecords();
        csvWriter.writeRecords(records)
            .then(() => writeInChunks());
    } else {
        console.timeEnd('writeCSV');
        console.log('Great job, Bradley. You have generated the photos CSV');
    }
};

console.time('writeCSV');
writeInChunks();