const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker')


const csvWriter = createCsvWriter({
    path: './seeder/csvFiles/properties.csv',
    header: [{
            id: 'id',
            title: 'id'
        },
        {
            id: 'address',
            title: 'address'
        },
    ]
});

let num = 1;

const generateAllRecords = () => {
    let records = [];
    let street = faker.address.streetAddress();
    let city = faker.address.city();
    let state = faker.address.stateAbbr();
    let zip = faker.address.zipCode(); 
    let address = `${street}, ${city}, ${state}, ${zip}`;

    let record = {
        id: num,
        address: address
    };

    records.push(record);
    num++;

    return records;
}

let batches = 0;

let writeInChunks = () => {
    if (batches < 100000) {
        batches += 1;
        let records = generateAllRecords();
        csvWriter.writeRecords(records)
            .then(() => append());
    } else {
        console.timeEnd('writeCSV');
        console.log('Great job, Bradley. You have generated the properties CSV');
    }
};

console.time('writeCSV');
writeInChunks();


