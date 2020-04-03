DROP KEYSPACE IF EXISTS listings;
CREATE KEYSPACE IF NOT EXISTS listings WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE listings;

CREATE TABLE properties (
   id bigint,
   address text,
   PRIMARY KEY(id)
);

CREATE TABLE photos (
  id bigint,
  propId bigint,
  url text,
  PRIMARY KEY(propId, id)
)

COPY properties (id, address) FROM './seeder/csvFiles/properties1.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY properties (propId), id, url) FROM './seeder/csvFiles/photos1.csv' WITH DELIMITER=',' AND HEADER=TRUE;