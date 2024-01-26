#!/bin/bash

mkdir -p ./postgres/data
mkdir -p ./postgres/pg_admin
chmod -R 777 ./postgres/data
chmod -R 777 ./postgres/pg_admin
# jakby byl permission denied w pg_admin to komenda wyzej
docker-compose build
docker-compose up -d
docker-compose exec django python manage.py migrate
docker-compose exec django python manage.py runserver 0.0.0.0:8000