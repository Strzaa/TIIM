#!/bin/bash
##
sleep 5s
echo "Odpalam entrypoint"
python manage.py makemigrations zarzadzanie_pojazdami
python manage.py migrate
python manage.py loaddata zarzadzanie_pojazdami/sample_data/pojazd.json
