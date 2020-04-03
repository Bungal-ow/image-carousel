const masterArrTrim = require('./masterArrTrim.js')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: './seeder/csvFiles/photos.csv',
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

let num = 1;
let propNum = 1

const generateAllRecords = () => {
    let records = [];

    for (let j = 0; j < masterArrTrim.length; j++) {
        for (let k = 0; k < masterArrTrim[j].length; k++) {
            let photoURL = masterArrTrim[j][k];

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

let append = () => {
    if (batches < 100000) {
        batches += 1;
        let data = generateAllRecords();
        csvWriter.writeRecords(data)
            .then(() => append());
    } else {
        console.timeEnd('writeCSV');
        console.log('The CSV file was written successfully');
    }
};

console.time('writeCSV');
append();