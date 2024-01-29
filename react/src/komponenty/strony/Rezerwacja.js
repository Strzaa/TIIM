import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeroSection10 from '../HeroSection10';

export default function Rezerwacja() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/Logowanie');
      return;
    }

    // Sprawdzenie, czy użytkownik jest zalogowany
    fetch('http://192.168.8.148:8000/zarzadzanie_pojazdami/czy_zalogowany/', {
      headers: {
        'Authorization': `Token ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      if (!data.czy_zalogowany) {
        navigate('/Logowanie');
        return;
      }

      // Pobranie danych pojazdu
      fetch(`http://192.168.8.148:8000/zarzadzanie_pojazdami/wyszukaj_pojazdy/?format=json&id=${id}`)
        .then(response => response.json())
        .then(data => setVehicle(data))
        .catch(error => console.error('Error:', error));
    })
    .catch(error => {
      console.error('Error:', error);
      navigate('/Logowanie');
    });
  }, [id, navigate]);

  return vehicle ? <HeroSection10 vehicle={vehicle} /> : <p>Ładowanie danych pojazdu...</p>;
}
