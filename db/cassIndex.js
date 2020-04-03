const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'reservations'
});

async function example() {
    await client.connect();
    await client.execute(`CREATE KEYSPACE IF NOT EXISTS listings
                          WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': '1' }`);
    await client.execute(`USE listings`);
    await client.execute(`CREATE TABLE property (
        id bigint,
        address text,
        PRIMARY KEY(id)
     )`);
     await client.execute(`CREATE TABLE photos (
        propId bigint,
        id bigint,
        url text,
        PRIMARY KEY(propId)
     )`);
}