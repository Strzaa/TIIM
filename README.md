# TIIM

Aby uruchomić lokalnie:

1. Wejdź do kalalogu gdzie chce mieć projekt
2. Wejdź w cmd / git cmd / VSC Terminal / WSL aby wykonać polecenie
   "git clone -b `<branch_name> <http_z_zakładki_code>`"
   LUB
   Pobierz jako .zip i rozpakuj
3. Przejdź do katalogu projektu
4. Stwórz foldery data i pg_admin w środku folderu postgres
   mkdir -p ./postgres/data
   mkdir -p ./postgres/pg_admin
5. Nadaj im uprawnienia
   chmod -R 777 ./postgres/data
   chmod -R 777 ./postgres/pg_admin
6. Wykonaj polecenia compose
   "docker-compose build"
   "docker-compose up -d"
7. UI do bazy pod adresem http://localhost:5051/
8. Django pod adresem http://localhost:8000/
