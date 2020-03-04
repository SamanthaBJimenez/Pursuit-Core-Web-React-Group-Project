DROP DATABASE IF EXISTS letsgo_db;

CREATE DATABASE letsgo_db;

\c letsgo_db;

DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

-- ///test//
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password TEXT,
    email Text,
    bio TEXT,
    proPicURL TEXT DEFAULT 'https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png'
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES users(id) ON DELETE CASCADE,
    description TEXT,	
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pictures(
    id SERIAL PRIMARY KEY,
    post_id	INT REFERENCES posts(id) ON DELETE CASCADE,
    pictureURL TEXT
);

INSERT INTO users (username, password, bio, proPicURL)
    VALUES ('Kong', 'admin123', 'Love Avicii(R.I.P), BIG Pokemon fans', 'https://static1.squarespace.com/static/5b50ebb7e749401857e16f2f/t/5d7bbf0ef00cb05d84180599/1568390933661/CONGSONG%2C+YANG+-+Cong+Song+Yang.png'),
          ('Samantha Jimenez', 'admin123', 'My name is Sam', 'https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png'),
          ('Henry Nunez', 'admin123', 'My name is Henry', 'https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png'),
          ('Darsuabasi', 'admin123', 'Uduakabasi. A judoka pursuing tech dreams at Pursuit.', 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/38013965_10204917767580174_3881332877056540672_o.jpg?_nc_cat=107&_nc_ohc=gcE0O2vTZzEAX-l2BYA&_nc_ht=scontent-lga3-1.xx&oh=4976b4496286307144e4654e8cc9545c&oe=5ED39057');


INSERT INTO posts (poster_id, description)
    VALUES (1, '#Zoo'),
        (2, 'An amazing get away #Amazon'),
        (3, '#canada'),
        (4, 'Love!');

INSERT INTO pictures (post_id, pictureURL)
    VALUES 
    (1, 'https://static.scientificamerican.com/sciam/cache/file/5C51E427-1715-44E6-9B14D9487D7B7F2D_source.jpg?w=590&h=800&91ED69A6-2A32-43A3-97F8B241182A7D50'),
    (1, 'https://www.rd.com/wp-content/uploads/2019/08/Amazon-Jungle-Yasuni-Ecuador-800x450.jpg'),
    (1, 'https://seoimgak.mmtcdn.com/blog/sites/default/files/images/Lake-Louise.jpg'),
    (1, 'https://66.media.tumblr.com/dcc2df64be8f0ed4083bdf361443b49a/tumblr_mf6k6mGUqn1rexwvqo1_500.jpg');


-- INSERT INTO pictures (post_id, pictureURL) SELECT id, imgURL FROM posts;
-- UPDATE pictures SET album_id=1 WHERE id in (5,1); 
-- UPDATE pictures SET album_id=2 WHERE id in (4); 
-- UPDATE pictures SET album_id=3 WHERE id in (18,13,2); 
-- UPDATE pictures SET album_id=4 WHERE id in (17,11,10); 
-- UPDATE pictures SET album_id=5 WHERE id in (16,14,12,9,7,6); 
-- UPDATE pictures SET album_id=6 WHERE id in (15,8,3,19); 
