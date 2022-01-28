drop database if exists many_faces_of_tobey_maguire;
create database many_faces_of_tobey_maguire;
use many_faces_of_tobey_maguire;

create table tobey_magiure(
	maguire_id int primary key auto_increment,
    `name` varchar(255) not null,
    `description` varchar(255) not null,
    image_url varchar(256) not null
);

create table tobeytypes(
	tobeytype_id int primary key auto_increment,
    `name` varchar(255) not null,
    `description` varchar(255) not null,
    maguire_id int not null,
    constraint fk_tobeytypes_maguire_id
		foreign key(maguire_id)
        references tobey_magiure(maguire_id)
);