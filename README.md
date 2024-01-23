# TIIM

**Aby uruchomić lokalnie:**

1. Wejdź do kalalogu gdzie chce mieć projekt
2. Wejdź w cmd / git cmd / VSC Terminal / WSL aby wykonać polecenie  "git clone -b `<branch_name> <http_z_zakładki_code>`"  LUB  Pobierz jako .zip i rozpakuj
3. Przejdź do katalogu projektu
4. Uruchom poprzez bash plik ./startup.sh, nadaj uprawniena jeżeli wymagane
   Skrypt powinien sam wszystko ustawić oraz uruchomić kontenery

Jeżeli wszystko przebiegło pomyślnie to od tej pory wystarczy robić  

docker-compose down  

docker-compose up -d  

Przy zmianach w repo  


**Łączenie do bazy w pg_admin* 

Add New Seerver -> Name: postgres -> Connection ->  

Host name / address: postgres  

Maintenence database: car_rent_DB  

Username: admin  

Password: pass  


**UWAGA: NIE PUSHOWAĆ FOLDERU POSTGRES DO REPO*
