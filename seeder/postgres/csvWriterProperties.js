const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'seeder/postgres/csvFiles/properties.csv',
    header: [{
            id: 'id',
            title: 'id'
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
        },
    ]
});

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let num = 1;

const generateAllRecords = () => {
    let records = [];
    let price = randomIntFromInterval(250000, 5000000);
    let beds = randomIntFromInterval(2, 7);
    let baths = randomIntFromInterval(1, beds);
    let sqft = randomIntFromInterval(1000, 8000);

    let record = {
        id: num,
        price: price,
        beds: beds,
        baths: baths,
        sqft: sqft
    };

    records.push(record);
    num++;

    return records;
}



let batches = 0;

const writeInChunks = () => {
    if (batches < 10000000) {
        batches += 1;
        let records = generateAllRecords();
        csvWriter.writeRecords(records)
            .then(() => writeInChunks());
    } else {
        console.timeEnd('writeCSV');
        console.log('Great job, Bradley. You have generated the properties CSV');
    }
};

console.time('writeCSV');
writeInChunks();