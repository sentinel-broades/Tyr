CREATE TABLE person (
  	id              SERIAL PRIMARY KEY,
  	email           VARCHAR(250)   UNIQUE,
  	forename        VARCHAR(100)  NOT NULL,
	surname         VARCHAR(100) NOT NULL
);


  
  