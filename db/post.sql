-- PostgeSQL

DROP DATABASE IF EXISTS listings;
CREATE DATABASE IF NOT EXISTS listings;
USE listings;

CREATE TABLE properties (
   propId INT,
   address TEXT,
   PRIMARY KEY(propId)
);

CREATE TABLE photos (
  propId INT,
  id INT NOT NULL,
  url TEXT,
  PRIMARY KEY(id),
  FOREIGN KEY (propId) REFERENCES properties (propId)
)

COPY properties (propId, address) FROM '/Users/bradleyzazzara/Desktop/image-carousel/seeder/csvFiles/properties.csv'  DELIMITER',' CSV HEADER;
COPY photos (propId, id, url) FROM '/Users/bradleyzazzara/Desktop/image-carousel/seeder/csvFiles/photos.csv'  DELIMITER=',' CSV HEADER;