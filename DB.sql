create database list;
SELECT CURRENT_TIMESTAMP(0)::timestamp at time zone 'UTC' at time zone 'America/Caracas';

create table app_user (
	user_id serial PRIMARY KEY,
	username VARCHAR (60) NOT NULL,
	email VARCHAR (255) NOT NULL,
	password VARCHAR (120) NOT NULL
);

create table tag (
	tag_id serial PRIMARY KEY,
	name VARCHAR (60) NOT NULL,
	description VARCHAR (1000),
	color VARCHAR (50),
	priority integer,
    user_id integer NOT NULL,
	FOREIGN KEY (user_id)
        REFERENCES app_user (user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

create table list (
	list_id serial PRIMARY KEY,
	title VARCHAR (500) NOT NULL,
	position integer,
	color VARCHAR (50),
	edited TIMESTAMP,
	created TIMESTAMP,
	completed boolean DEFAULT 'false',
	user_id integer NOT NULL,
	FOREIGN KEY (user_id)
        REFERENCES app_user (user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

create table task (
	task_id serial PRIMARY KEY,
	value VARCHAR (3000),
	img VARCHAR (300),
	strikethrough boolean DEFAULT 'false',
	position_list integer,
  	position_inbox integer,
	created TIMESTAMP,
	edited TIMESTAMP,
	time_limit TIMESTAMP,
	time_alert TIMESTAMP,
	tag integer,
	list integer,
	FOREIGN KEY (tag)
        REFERENCES tag (tag_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
	FOREIGN KEY (list)
        REFERENCES list (list_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);