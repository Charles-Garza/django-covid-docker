-- Table: public."state"

-- DROP TABLE public."state";

CREATE TABLE public."state"
(
 state_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
 cases integer DEFAULT 0,
 today_cases integer DEFAULT 0,
 deaths integer DEFAULT 0,
 today_deaths integer DEFAULT 0,
 active integer DEFAULT 0,
 CONSTRAINT state_name_pkey PRIMARY KEY (state_name)
 )
WITH (
    OIDS = FALSE
)

