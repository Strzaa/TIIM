FROM postgres:latest

ENV POSTGRES_DB=car_rent_DB
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=pass

COPY init.sql /docker-entrypoint-initdb.d/