-- PostgeSQL

DROP DATABASE IF EXISTS listings;
CREATE DATABASE IF NOT EXISTS listings;
USE listings;

CREATE TABLE properties (
   id SERIAL,
   price INT NOT NULL,
   beds INT NOT NULL,
   baths INT NOT NULL,
   sqft INT NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE photos (
  propId INT NOT NULL,
  id SERIAL,
  url TEXT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (propId) REFERENCES properties (id)
)

COPY properties (id, price, beds, baths, sqft) FROM '/Users/bradleyzazzara/Desktop/image-carousel/seeder/postgres/csvFiles/properties.csv'  DELIMITER',' CSV HEADER;
COPY photos (propId, id, url) FROM '/Users/bradleyzazzara/Desktop/image-carousel/seeder/postgres/csvFiles/photos.csv'  DELIMITER',' CSV HEADER;
