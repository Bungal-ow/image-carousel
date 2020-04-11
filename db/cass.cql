-- Cassandra

DROP KEYSPACE IF EXISTS listings;
CREATE KEYSPACE IF NOT EXISTS listings WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE listings;

CREATE TABLE photos (
  id   UUID,
  propId int,
  url text,
  price int,
  beds tinyint, 
  baths tinyint,
  sqft smallint,
  PRIMARY KEY (propId, id)
);

COPY photos (id, propId, url, price, beds, baths, sqft) FROM '/Users/bradleyzazzara/Desktop/image-carousel/seeder/cassandra/csvFiles/photos.csv' WITH DELIMITER=',' AND HEADER=TRUE;