FROM postgres:11-alpine

RUN apk add --no-cache bash

COPY ./scripts /docker-entrypoint-initdb.d/

CMD ["postgres"]
