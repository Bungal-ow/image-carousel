-- Cassandra

DROP KEYSPACE IF EXISTS listings;
CREATE KEYSPACE IF NOT EXISTS listings WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE listings;

CREATE TABLE properties (
   propId int,
   address text,
   PRIMARY KEY(propId)
);

CREATE TABLE photos (
  id int,
  propId int,
  url text,
  PRIMARY KEY(propId, id)
)

COPY properties (id, address) FROM '/Users/bradleyzazzara/Desktop/image-carousel/seeder/csvFiles/properties.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY photos (propId, id, url) FROM '/Users/bradleyzazzara/Desktop/image-carousel/seeder/csvFiles/properties.csv' WITH DELIMITER=',' AND HEADER=TRUE;