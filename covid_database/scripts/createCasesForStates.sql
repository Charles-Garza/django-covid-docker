-- Table: public."covid_state"

-- DROP TABLE public."covid_state";

CREATE TABLE public."covid_state"
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

TABLESPACE pg_default;

ALTER TABLE public."covid_state"
    OWNER to postgres;
