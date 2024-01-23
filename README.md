# TIIM

**Aby uruchomić lokalnie:**

1. Wejdź do kalalogu gdzie chce mieć projekt `<br />`
2. Wejdź w cmd / git cmd / VSC Terminal / WSL aby wykonać polecenie `<br />`
   "git clone -b `<branch_name> <http_z_zakładki_code>`"`<br />`
   LUB `<br />`
   Pobierz jako .zip i rozpakuj `<br />`
3. Przejdź do katalogu projektu `<br />`
4. Uruchom poprzez bash plik ./startup.sh, nadaj uprawniena jeżeli wymagane `<br />`
   Skrypt powinien sam wszystko ustawić oraz uruchomić kontenery `<br />`

Jeżeli wszystko przebiegło pomyślnie to od tej pory wystarczy robić `<br />`

docker-compose down `<br />`

docker-compose up -d `<br />`

Przy zmianach w repo `<br />`


**Łączenie do bazy w pg_admin `<br />`**

Add New Seerver -> Name: postgres -> Connection -> `<br />`

Host name / address: postgres `<br />`

Maintenence database: car_rent_DB `<br />`

Username: admin `<br />`

Password: pass `<br />`


**UWAGA: NIE PUSHOWAĆ FOLDERU POSTGRES DO REPO `<br />`**
