BEGIN;

DROP TABLE IF EXISTS artists;
DROP TABLE IF EXISTS fairs CASCADE;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS artwork;

COMMIT;

BEGIN;

CREATE TABLE artists (
  artist_id SERIAL UNIQUE PRIMARY KEY,
  fname VARCHAR(30) NOT NULL,
  lname VARCHAR(30) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  joined_date DATE NOT NULL DEFAULT now()
);

CREATE TABLE users (
  user_id SERIAL UNIQUE PRIMARY KEY,
  fname VARCHAR(30) NOT NULL,
  lname VARCHAR(30) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  joined_date DATE NOT NULL DEFAULT now()
);

CREATE TABLE fairs (
  fair_id SERIAL UNIQUE PRIMARY KEY,
  title VARCHAR NOT NULL,
  dates VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE post (
  post_id SERIAL UNIQUE PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(255),
  created_date DATE NOT NULL DEFAULT now()
  fair_id INT REFERENCES fairs(fair_id)
);

-- CREATE TABLE image (
--   image_id SERIAL UNIQUE PRIMARY KEY,
--   url VARCHAR(255) NOT NULL,
--   upload_date DATE NOT NULL DEFAULT now(),
-- );

-- CREATE TABLE image_post_ref (
--   post_id INT NOT NULL,
--   image_id INT NOT NULL
-- );

COMMIT;



