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


insert into tag(tag_id, vibe) values
	(1, 'dancing'),
    (2, 'sad'),
    (3, 'angry'),
    (4, 'happy'),
    (5, 'awkward');

insert into tobey(tobey_id, `name`, `description`, image_url) values
	(1, 'Dancing Tobey', 'Spiderman Dance Scene', 'https://i.imgur.com/kzh2pcp.jpg'),
    (2, 'Angry Tobey', 'Tobey angry with paparrazi', 'https://images4.fanpop.com/image/photos/23000000/angry-Tobey-tobey-maguire-23084753-450-536.jpg'),
    (3, 'Sad Tobey', 'Tobey sad & crying', 'https://townsquare.media/site/442/files/2012/09/tobey-cry.jpg?w=980&q=75'),
    (4, 'Awkward Tobey', 'Weird Face Tobey', 'https://www.hayvine.com/careers/16065716561.png'),
    (5, 'Happy Tobey', 'Smiling Tobey', 'https://i0.wp.com/urbanasian.com/wp-content/uploads/2019/06/Tobey-Maguire.png?w=475&ssl=1');
    
insert into tobey_tag(tobey_id, tag_id) values
	(1, 1),
    (2, 3),
    (3, 2),
    (4, 5),
    (5, 4);
    
select *
from tobey as t
left outer join tobey_tag tt on t.tobey_id = tt.tobey_id
left outer join tag ta on tt.tag_id = ta.tag_id;
