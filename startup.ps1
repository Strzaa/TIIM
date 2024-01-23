# Tworzenie folderów
New-Item -ItemType Directory -Force -Path ".\postgres\data"
New-Item -ItemType Directory -Force -Path ".\postgres\pg_admin"
Get-ChildItem ".\postgres\data" | ForEach-Object { $_.Attributes = 'Directory, Archive' }
Get-ChildItem ".\postgres\pg_admin" | ForEach-Object { $_.Attributes = 'Directory, Archive' }

# Budowanie obrazów
docker-compose build

# Uruchamianie kontenerów w tle
docker-compose up -d

# Oczekiwanie na dostępność usługi PostgreSQL
Write-Host "Czekam na dostępność PostgreSQL..."
Start-Sleep -s 10

# Wykonywanie migracji
docker-compose exec django python manage.py migrate

# Uruchamianie serwera Django
docker-compose exec django python manage.py runserver 0.0.0.0:8000