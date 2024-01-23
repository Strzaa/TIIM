#!/bin/bash

mkdir -p ./postgres/data
mkdir -p ./postgres/pg_admin
chmod -R 777 ./postgres/data
chmod -R 777 ./postgres/pg_admin
docker-compose build
docker-compose up -d
sleep 10s
docker-compose exec django python manage.py migrate
docker-compose exec django python manage.py runserver 0.0.0.0:8000