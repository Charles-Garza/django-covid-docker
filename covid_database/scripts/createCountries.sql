-- Table: public."covid_countries"

-- DROP TABLE public."covid_countries";

CREATE TABLE public."covid_countries"
(
 country_id serial NOT NULL,
 country_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
 latitude float DEFAULT 0,
 longitude float DEFAULT 0,
 flag_image character varying(255) COLLATE pg_catalog."default" NOT NULL,
 iso3 character varying(255) COLLATE pg_catalog."default" NOT NULL,
 cases integer DEFAULT 0,
 today_cases integer DEFAULT 0,
 deaths integer DEFAULT 0,
 today_deaths integer DEFAULT 0,
 recovered integer DEFAULT 0,
 active integer DEFAULT 0,
 critical integer DEFAULT 0,
 cases_per_million integer DEFAULT 0,
 deaths_per_million integer DEFAULT 0,
 CONSTRAINT country_name_pkey PRIMARY KEY (country_name)
 )
WITH (
    OIDS = FALSE
)

TABLESPACE pg_default;

ALTER TABLE public."covid_countries"
    OWNER to postgres;

