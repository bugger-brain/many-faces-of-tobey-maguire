drop database if exists many_faces_of_tobey_maguire_test;
create database many_faces_of_tobey_maguire_test;
use many_faces_of_tobey_maguire_test;

create table tobey(
	tobey_id int primary key auto_increment,
    `name` varchar(255) not null,
    `description` varchar(2048) not null,
    image_url varchar(1024) not null
);

create table tag(
	tag_id int primary key auto_increment,
    vibe varchar(255) not null
);

create table tobey_tag(
	tobey_id int not null,
    tag_id int not null,
    constraint pk_tobey_tag
			primary key(tobey_id, tag_id),
        constraint fk_tobey_tag_tobey_id
			foreign key(tobey_id)
            references tobey(tobey_id),
		constraint fk_tobey_tag_tag_id
			foreign key(tag_id)
            references tag(tag_id)
);

create table message (
	message_id int primary key auto_increment,
	`name` varchar(255) not null,
	`description` varchar(2048) not null
);

insert into message (message_id, `name`, `description`) values
	(1, 'Sheridan', 'hi tobey!'),
    (2, 'Test', 'testytest');


insert into tag(tag_id, vibe) values
	(1, 'dancing'),
    (2, 'sad'),
    (3, 'angry'),
    (4, 'happy'),
    (5, 'awkward'),
    (6, 'bangs'),
    (7, 'the-face'),
    (9, 'winter'),
    (10, 'real-life'),
    (11, 'spiderman-movie'),
    (12, 'meme'),
    (13, 'goatee'),
    (14, 'crossover'),
    (15, 'joker'),
    (16, 'steal-yo-girl'),
    (17, 'serious'),
    (18, 'evil'),
    (19, 'gif'),
    (20, 'tobey-prime'),
    (21, 'paparazi'),
    (22, 'protec');

insert into tobey(tobey_id, `name`, `description`, image_url) values
	(1, 'Dancing Tobey', 'Spiderman Dance Scene', 'https://c.tenor.com/P8VsDwHZreYAAAAd/tobey-maguire-spider-man.gif'),
    (2, 'Angry Tobey', 'Tobey angry with paparrazi', 'https://images4.fanpop.com/image/photos/23000000/angry-Tobey-tobey-maguire-23084753-450-536.jpg'),
    (3, 'Sad Tobey', 'Tobey sad & crying', 'https://townsquare.media/site/442/files/2012/09/tobey-cry.jpg?w=980&q=75'),
    (4, 'Awkward Tobey', 'Weird Face Tobey', 'https://www.hayvine.com/careers/16065716561.png'),
    (5, 'Happy Tobey', 'Smiling Tobey', 'https://i0.wp.com/urbanasian.com/wp-content/uploads/2019/06/Tobey-Maguire.png?w=475&ssl=1'),
    (6, 'Winter Tobey', 'Skiing in the snow', 'https://i.pinimg.com/originals/ec/5c/ef/ec5cef6d18995202cbc394d29dafbeae.jpg'),
    (7, 'Weird smiling Tobey', 'Smiling in his apartment', 'https://stealthoptional.com/wp-content/uploads/2021/04/Spider-man-3-tobey-maguire.jpeg'),
    (8, 'Joker Crossover', 'Tobey Joker Crossover', 'https://cdn.ebaumsworld.com/mediaFiles/picture/705380/86059123.png'),
    (9, 'Saving a Train', 'Saving a train', 'https://thumbs.gfycat.com/PlayfulFrightenedBoar-poster.jpg'),
    (10, 'Hairflip', 'Hairflip', 'https://i.kym-cdn.com/photos/images/original/000/731/724/c8a.gif'),
    (11, 'Sick Moves Maguire', 'Sick Moves Maguire', 'https://i.imgur.com/T9acXnG.gif');
    
insert into tobey_tag(tobey_id, tag_id) values
	(1, 1),
    (1, 6),
    (1, 20),
    (1, 11),
    (1, 19),
    (2, 3),
    (2, 10),
    (2, 17),
    (2, 21),
    (3, 2),
    (3, 7),
    (3, 11),
    (3, 12),
    (4, 4),
    (4, 5),
    (4, 12),
    (4, 20),
    (4, 7),
    (4, 11),
    (5, 4),
    (5, 10),
    (6, 9),
    (6, 10),
    (6, 17),
    (7, 7),
    (7, 11),
    (7, 12),
    (8, 1),
    (8, 6),
    (8, 15),
    (8, 14),
    (9, 11),
    (9, 7),
    (9, 17),
    (9, 20),
    (9, 21),
    (10, 6),
    (10, 16),
    (10, 11),
    (10, 18),
    (11, 6),
    (11, 11),
    (11, 16),
    (11, 18),
    (11, 19),
    (11, 20);
    
select *
from tobey as t
left outer join tobey_tag tt on t.tobey_id = tt.tobey_id
left outer join tag ta on tt.tag_id = ta.tag_id;

select *
from message;
