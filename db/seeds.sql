BEGIN;

INSERT INTO fairs (title, dates, address, description) VALUES ('ART BASEL', 'Upcoming Shows: Hong Kong, March 23-25, 2017', 'Venue: Hong Kong  Convention & Exhibition Centre 1 Harbour Road Wan Chai Hong Kong, China', 'Since 1970, Art Basel''s goal has been to connect the world''s premier galleries and their patrons, as well serving as a meeting point for the international artworld. Now, over forty years later, its three fairs - in Basel, Hong Kong and Miami Beach - rank as the premier shows of their kind, presenting 20th and 21st century art with a strong curatorial perspective.');
INSERT INTO fairs (title, dates, address, description) VALUES ('FRIEZE NEW YORK', 'May 5-7, 2017', 'Randall’s Island Park', 'Frieze is a media and events company that comprises four publications, frieze magazine, frieze d/e, Frieze Masters Magazine and Frieze Week; and three international art fairs, Frieze London, Frieze New York and Frieze Masters; a programme of courses and talks at Frieze Academy, and frieze.com - the definitive resource for contemporary art and culture.');
INSERT INTO fairs (title, dates, address, description) VALUES ('TEFAF NEW YORK SPRING', 'TEFAF New York Fall 2016, opens on October 22, 2016.', 'Park Avenue Armory', 'Held at the historic Park Avenue Armory, it provides the world''s leading art dealers the opportunity to meet with curators and collectors at a prime Manhattan location. Its timing in early May is also deliberate: to coincide with the other fairs, auctions and exhibitions dedicated to modern and contemporary art and design held in New York at the same time.');
INSERT INTO fairs (title, dates, address, description) VALUES ('EUROPEAN FINE ART FOUNDATION', '', 'Masstricht', 'Established in 1975 as the The Pictura Fine Art Fair, and renamed The European Fine Art Foundation (TEFAF), Maastricht in 1996, the fair includes 260 of the world''s most prestigious art and antiques dealers from 16 countries.');
INSERT INTO fairs (title, dates, address, description) VALUES ('ARCO MADRID', '22-26 February 2017', '36 INTERNATIIONAL CONTEMPORARY ART FAIR, FERIA DE MADRID Halls 7 and 9', 'ARCO Madrid was established in 1982 and is one of Europe''s leading and popular art fairs. In addition to the exhibiting galleries (in 2011, 197 international art galleries participated), a series of lectures and specially focused exhibitions take place.');


INSERT INTO post (post_title, post_description, fair_id, image_url) VALUES ('Post 1', 'post 1 description', 1, 'https://artrade.s3.amazonaws.com/10009680139');
INSERT INTO post (post_title, post_description, fair_id, image_url) VALUES ('Post 2', 'post 2 description', 1, 'https://artrade.s3.amazonaws.com/1000530722');
INSERT INTO post (post_title, post_description, fair_id, image_url) VALUES ('Post 3', 'post 3 description', 2, 'https://artrade.s3.amazonaws.com/10009680139');
INSERT INTO post (post_title, post_description, fair_id, image_url) VALUES ('Post 4', 'post 4 description', 2, 'https://artrade.s3.amazonaws.com/10009680139');
INSERT INTO post (post_title, post_description, fair_id, image_url) VALUES ('Post 5', 'post 5 description', 3, 'https://artrade.s3.amazonaws.com/1000530722');
INSERT INTO post (post_title, post_description, fair_id, image_url) VALUES ('Post 6', 'post 6 description', 3, 'https://artrade.s3.amazonaws.com/10post_009680139');
INSERT INTO post (post_title, post_description, fair_id, image_url) VALUES ('Post 7', 'post 7 description', 4, 'https://artrade.s3.amazonaws.com/10009680139');
INSERT INTO post (post_title, post_description, fair_id, image_url) VALUES ('Post 8', 'post 8 description', 4, 'https://artrade.s3.amazonaws.com/1000530722');
INSERT INTO post (post_title, post_description, fair_id, image_url) VALUES ('Post 9', 'post 9 description', 5, 'https://artrade.s3.amazonaws.com/10009680139');
INSERT INTO post (post_title, post_description, fair_id, image_url) VALUES ('Post 10', 'post 10 description', 5, 'https://artrade.s3.amazonaws.com/10009680139');


COMMIT;
