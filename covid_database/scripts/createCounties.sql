-- Table: public."covid_county"

-- DROP TABLE public."covid_county";

CREATE TABLE public."covid_county"
(
 county_name character varying(255) COLLATE pg_catalog."default" UNIQUE NOT NULL,
 state_name_id character varying(255) COLLATE pg_catalog."default" NOT NULL,
 updated character varying(255) COLLATE pg_catalog."default" NOT NULL,
 confirmed integer DEFAULT 0,
 recovered integer DEFAULT 0,
 deaths integer DEFAULT 0,
 latitude float DEFAULT 0,
 longitude float DEFAULT 0,
 CONSTRAINT county_name_pkey PRIMARY KEY (county_name)
 )
WITH (
    OIDS = FALSE
)

TABLESPACE pg_default;

ALTER TABLE covid_county ADD FOREIGN KEY (state_name_id)
REFERENCES public.covid_state(state_name) ON DELETE CASCADE;

ALTER TABLE public."covid_county"
    OWNER to postgres;
