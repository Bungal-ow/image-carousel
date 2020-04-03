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

let append = () => {
    if (batches < 10000000) {
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


