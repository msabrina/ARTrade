BEGIN;

INSERT INTO fairs (title, dates, address, description) VALUES ('Art Basel', 'Upcoming Shows: Hong Kong
March 23-25, 2017', 'Venue
Hong Kong  Convention & Exhibition Centre 1 Harbour Road Wan Chai Hong Kong, China', 'Since 1970, Art Basel''s goal has been to connect the world''s premier galleries and their patrons, as well serving as a meeting point for the international artworld. Now, over forty years later, its three fairs - in Basel, Hong Kong and Miami Beach - rank as the premier shows of their kind, presenting 20th and 21st century art with a strong curatorial perspective.');
INSERT INTO fairs (title, dates, address, description) VALUES ('Frieze New York', 'blha', 'bla', 'Frieze is a media and events company that comprises four publications, frieze magazine, frieze d/e, Frieze Masters Magazine and Frieze Week; and three international art fairs, Frieze London, Frieze New York and Frieze Masters; a programme of courses and talks at Frieze Academy, and frieze.com - the definitive resource for contemporary art and culture.');
INSERT INTO fairs (title, dates, address, description) VALUES ('Art Basel 1', 'blha', 'bla', 'blah 1');
INSERT INTO fairs (title, dates, address, description) VALUES ('Art Basel 2', 'blha', 'bla', 'blah 2');
INSERT INTO fairs (title, dates, address, description) VALUES ('Art Basel 3', 'blha', 'bla', 'blah 3');


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
