
DROP DATABASE IF EXISTS letsgo_db;
CREATE DATABASE letsgo_db;

\c letsgo_db;

DROP TABLE IF EXISTS Posts;
DROP TABLE IF EXISTS Hashtags;
DROP TABLE IF EXISTS Users;  

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password TEXT,
    bio TEXT,
    profilePic VARCHAR,
    email TEXT UNIQUE
);

CREATE TABLE Posts (
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES Users(id) ON DELETE CASCADE,
    imageURL VARCHAR,
    content TEXT,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Hashtags (
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES Users(id),
    post_id  INT REFERENCES Posts(id),
    tag_name TEXT
);

INSERT INTO Users (username, password, bio, profilePic, email)
    VALUES ('darsu', 'admin123', 'Yuurrrrr', 'picurl','darsu@gmail.com' ),
           ('henry', 'admin123', 'Hey party people, its ya boy', 'picurl','henry@gmail.com'),
           ('sam', 'admin123', 'Heeeey now', 'picurl', 'sam@gmail.com'),
           ('kong', 'admin123', 'PokemonGo ayeeeee', 'picurl', 'kong@gmail.com');

INSERT INTO Posts (poster_id, imageURL, content)
    VALUES (1, './public/singapore-skyline.jpg', 'Check me out in Singapore Skyline.'),
           (2, 'image', 'Deff looking forward to running out here'),
           (3, 'image', 'Biking in France...magnifique'),
           (4, './public/new-york-gay-pride-2018.jpg', 'Gay Pride in New York'),
           (3, 'image', 'Beachdayssssss'),
           (1, 'image', 'Bali lounging'),
           (4, 'image', 'Yeah yeah yeah' ),
           (2, 'image', 'Views from Toronto');

INSERT INTO Hashtags (poster_id, post_id, tag_name)
    VALUES (1, 1, 'Montreal'),
           (2, 2, 'runnersHigh'),
           (3, 3, 'France'),
           (3, 3, 'Europe'),
           (4, 4, 'New York City'),
           (4, 4, 'Pride'),
           (3, 5, 'Cali'),
           (1, 6, 'Bali'),
           (4, 7, ' '),
           (2, 8, 'Toronto'),
           (2, 8, 'Canada');