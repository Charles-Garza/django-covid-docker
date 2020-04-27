-- Table: public."covid_allcases"

-- DROP TABLE public."covid_allcases";

CREATE TABLE public."covid_allcases"
(
 id serial NOT NULL,
 cases integer DEFAULT 0,
 deaths integer DEFAULT 0,
 recovered integer DEFAULT 0,
 updated character varying(255) COLLATE pg_catalog."default" NOT NULL,
 active integer DEFAULT 0
 )
WITH (
    OIDS = FALSE
)

TABLESPACE pg_default;

ALTER TABLE public."covid_allcases"
    OWNER to postgres;

