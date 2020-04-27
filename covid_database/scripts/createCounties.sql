-- Table: public."county"

-- DROP TABLE public."county";

CREATE TABLE public."county"
(
 county_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
 state_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
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

ALTER TABLE county ADD FOREIGN KEY (state_name)
REFERENCES public.state(state_name) ON DELETE CASCADE;

ALTER TABLE public."county"
    OWNER to postgres;
