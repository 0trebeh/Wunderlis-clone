create database list;

create table app_user (
	user_id serial PRIMARY KEY,
	username VARCHAR (60) NOT NULL,
	email VARCHAR (255) NOT NULL,
	password VARCHAR (120) NOT NULL
);

create table tag (
	tag_id serial PRIMARY KEY,
	name VARCHAR (60) NOT NULL,
	descrition VARCHAR (500),
	color VARCHAR (50),
	priority integer
);

create table list (
	list_id serial PRIMARY KEY,
	title VARCHAR (500) NOT NULL,
	position integer,
	color VARCHAR (50),
	pinned boolean,
	edited TIMESTAMP,
	created TIMESTAMP,
	time_limit TIMESTAMP,
	time_alert TIMESTAMP,
	completed boolean,
	tag integer,
	user_ integer,
	FOREIGN KEY (tag)
        REFERENCES tag (tag_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
	FOREIGN KEY (user_)
        REFERENCES app_user (user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

create table task (
	task_id serial PRIMARY KEY,
	strikethrough boolean,
	position integer,
	value VARCHAR (2000),
	img VARCHAR (200),
	list integer,
	FOREIGN KEY (list)
        REFERENCES list (list_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


