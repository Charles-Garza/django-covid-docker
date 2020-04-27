-- Table: public."allCases"

-- DROP TABLE public."allCases";

CREATE TABLE public."allCases"
(
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

ALTER TABLE public."allCases"
    OWNER to postgres;

