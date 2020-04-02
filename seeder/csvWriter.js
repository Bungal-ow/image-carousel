const masterArr = require('./masterArr.js')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: './properties.csv',
    header: [{
            id: 'id',
            title: 'ID'
        },
        {
            id: 'photos',
            title: 'PHOTOS'
        }
    ]
});
let num = 1;

const generateAllRecords = () => {
    let records = [];
        for (let j = 0; j < masterArr.length; j++) {
            let photos = [];

            for (let k = 0; k < masterArr[j].length; k++) {
                let photoURL = `${masterArr[j][k]}`;
                photos.push(photoURL);
            }

            let record = {id: num, photos: photos};
            records.push(record);
            num++;
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


// csvWriter.writeRecords(generateAllRecords()) // returns a promise
//     .then(() => {
//         console.log('...Done');
//     });

// This will produce a file path/to/file.csv with following contents:
//
//   NAME,LANGUAGE
//   Bob,"French, English"
//   Mary,English
