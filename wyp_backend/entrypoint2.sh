#!/bin/bash
##
sleep 5s
echo "Odpalam entrypoint"
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
