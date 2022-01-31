drop database if exists many_faces_of_tobey_maguire_test;
create database many_faces_of_tobey_maguire_test;
use many_faces_of_tobey_maguire_test;

create table tobey_maguire(
	maguire_id int primary key auto_increment,
    `name` varchar(255) not null,
    `description` varchar(255) not null,
    image_url varchar(256) not null
);

create table tobeytypes(
	tobeytype_id int primary key auto_increment,
    vibe varchar(255) not null
);

create table tobey_maguire_tobeytypes(
	maguire_id int not null,
    tobeytype_id int not null,
    constraint pk_tobey_maguire_tobeytypes
			primary key(maguire_id, tobeytype_id),
        constraint fk_tobey_maguire_tobeytypes_maguire_id
			foreign key(maguire_id)
            references tobey_maguire(maguire_id),
		constraint fk_tobey_maguire_tobeytypes_tobeytype_id
			foreign key(tobeytype_id)
            references tobeytypes(tobeytype_id)
);

insert into tobeytypes(tobeytype_id, vibe) values
	(1, 'Dancing Tobey'),
    (2, 'Sad Tobey'),
    (3, 'Angry Tobey'),
    (4, 'Happy Tobey'),
    (5, 'Awkward Tobey');

insert into tobey_maguire(maguire_id, `name`, `description`, image_url) values
	(1, 'Dancing Tobey', 'Spiderman Dance Scene', 'https://i.imgur.com/kzh2pcp.jpg'),
    (2, 'Angry Tobey', 'Tobey angry with paparrazi', 'https://images4.fanpop.com/image/photos/23000000/angry-Tobey-tobey-maguire-23084753-450-536.jpg'),
    (3, 'Sad Tobey', 'Tobey sad & crying', 'https://townsquare.media/site/442/files/2012/09/tobey-cry.jpg?w=980&q=75'),
    (4, 'Awkward Tobey', 'Weird Face Tobey', 'https://www.hayvine.com/careers/16065716561.png'),
    (5, 'Happy Tobey', 'Smiling Tobey', 'https://i0.wp.com/urbanasian.com/wp-content/uploads/2019/06/Tobey-Maguire.png?w=475&ssl=1');
    
insert into tobey_maguire_tobeytypes(maguire_id, tobeytype_id) values
	(1, 1),
    (2, 3),
    (3, 2),
    (4, 5),
    (5, 4);
    
select *
from tobey_maguire as t
left outer join tobey_maguire_tobeytypes tmt on t.maguire_id = tmt.maguire_id
left outer join tobeytypes tt on tmt.tobeytype_id = tt.tobeytype_id;
