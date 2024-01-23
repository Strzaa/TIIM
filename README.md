# TIIM

**Aby uruchomić lokalnie:**

1. Wejdź do kalalogu gdzie chce mieć projekt \n
2. Wejdź w cmd / git cmd / VSC Terminal / WSL aby wykonać polecenie\n
   "git clone -b `<branch_name> <http_z_zakładki_code>`"\n
   LUB \n
   Pobierz jako .zip i rozpakuj \n
3. Przejdź do katalogu projektu \n
4. Uruchom poprzez bash plik ./startup.sh, nadaj uprawniena jeżeli wymagane \n
   Skrypt powinien sam wszystko ustawić oraz uruchomić kontenery \n

Jeżeli wszystko przebiegło pomyślnie to od tej pory wystarczy robić \n

docker-compose down \n

docker-compose up -d \n

Przy zmianach w repo \n


**Łączenie do bazy w pg_admin \n**

Add New Seerver -> Name: postgres -> Connection -> \n

Host name / address: postgres \n

Maintenence database: car_rent_DB \n

Username: admin \n

Password: pass \n


**UWAGA: NIE PUSHOWAĆ FOLDERU POSTGRES DO REPO \n**
