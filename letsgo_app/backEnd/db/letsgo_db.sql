
DROP DATABASE IF EXISTS letsgo_db;
CREATE DATABASE letsgo_db;

\c letsgo_db;

-- id, username, password, bio, profilepic

-- id, posterId, imageurl, content

DROP TABLE IF EXISTS Posts;
DROP TABLE IF EXISTS Hashtags;
DROP TABLE IF EXISTS Users;  
-- id, posterId

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password TEXT,
    bio TEXT,
    profilePic VARCHAR,
    email TEXT
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
    VALUES (1, '../../frontend/public/assets/singapore-skyline.jpg', 'Check me out in Singapore Skyline.'),
           (2, '../../frontend/public/assets/bostonskyline.png', 'Deff looking forward to running out here'),
           (3, '../../frontend/public/assets/france.png', 'Biking in France...magnifique'),
           (4, '../../frontend/public/assets/new-york-gay-pride-2018.jpg', 'Gay Pride in New York'),
           (3, '../../frontend/public/assets/beachinrio.png', 'Beachdayssssss'),
           (1, '../../frontend/public/assets/bali.png', 'Bali lounging'),
           (4, '../../frontend/public/assets/mexicocitytacos.png', 'Yeaaaah' ),
           (2, '../../frontend/public/assets/torontoviews.png', 'Views from Toronto'),
           (1, '../../frontend/public/assets/dinnerDubai.png', 'Dinner in the sky. Whos with it?');
        --    ()
        --    ()
        --    ()
        --    ()
        --    ()
        --    ()
        --    ()

INSERT INTO Hashtags (poster_id, post_id, tag_name)
    VALUES (1, 1, 'Singapore'),
           (1, 1, 'skyline'),
           (2, 2, 'runnersHigh'),
           (2, 2, 'Boston'),
           (3, 3, 'France'),
           (3, 3, 'CatchUp'),
           (3, 3, 'Europe'),
           (4, 4, 'New York City'),
           (4, 4, 'Pride'),
           (3, 5, 'Rio'),
           (3, 5, 'Brazil'),
           (1, 6, 'Bali'),
           (1, 6, 'Indonesia'),
           (4, 7, 'MexicoCity'),
           (4, 7, 'Mexico'),
           (4, 7, 'Foodie'),
           (4, 7, 'RealTacos'),
           (2, 8, 'Toronto'),
           (2, 8, 'Canada'),
           (1, 9, 'Dubai'),
           (1, 9, 'DinnerInTheSky');