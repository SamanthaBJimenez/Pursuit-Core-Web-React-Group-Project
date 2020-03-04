DROP DATABASE IF EXISTS letsgo_db;

CREATE DATABASE letsgo_db;

\c letsgo_db;

DROP TABLE IF EXISTS Users;  
-- id, username, password, bio, profilepic

DROP TABLE IF EXISTS Posts;
-- id, posterId, imageurl, content

DROP TABLE IF EXISTS Hashtags;
-- id, posterId

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password TEXT,
    bio TEXT,
    profilePic VARCHAR MAX
);

CREATE TABLE Posts (
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES Users(id) ON DELETE CASCADE,
    imageURL VARCHAR MAX,
    content TEXT
);

CREATE TABLE Hashtags {
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES Users(id),
    post_id  INT REFERENCES Posts(id),
    tag_name TEXT
};

INSERT INTO Users (username, password, bio, profilePic)
    VALUES ('darsu', 'admin123', "Yuurrrrr", 'picurl' ),
           ('henry', 'admin123', 'Hey party people, its ya boy', 'picurl'),
           ('sam', 'admin123', 'Heeeey now', 'picurl'),
           ('kong', 'admin123', "PokemonGo ayeeeee", 'picurl');

INSERT INTO Posts (poster_id, imageURL, content)
    VALUES (1, 'image', 'Check me out in Montreal.'),
           (2, 'image', 'Deff looking forward to running out here'),
           (3, 'image', 'Biking in France...magnifique'),
           (4, 'image', 'Catching Pokemon in Amsterdam'),
           (3, 'image', 'Beachdayssssss'),
           (1, 'image', 'Bali lounging'),
           (4, 'image', 'Yeah yeah yeah' ),
           (2, 'image', 'Views from Toronto');

INSERT INTO Hashtags (poster_id, post_id, tag_name)
    VALUES (1, 1, 'Montreal'),
           (2, 2, 'runnersHigh'),
           (3, 3, 'France'),
           (4, 4, 'Amsterdam'),
           (3, 5, 'Cali'),
           (1, 6, 'Bali'),
           (4, 7, ''),
           (2, 8, 'Toronto');