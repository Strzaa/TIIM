import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeroSection16 from '../HeroSection16';

export default function Zmiana() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/Logowanie');
      return;
    }
    fetch('http://django:8000/zarzadzanie_pojazdami/czy_zalogowany/', {
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
      fetch(`http://django:8000/zarzadzanie_pojazdami/wyszukaj_pojazdy/?format=json&id=${id}`)
        .then(response => response.json())
        .then(data => setVehicle(data))
        .catch(error => console.error('Error:', error));
    })
    .catch(error => {
      console.error('Error:', error);
      navigate('/Logowanie');
    });
  }, [id, navigate]);

  return vehicle ? <HeroSection16 vehicle={vehicle} /> : <p>Ładowanie danych pojazdu</p>;
  
}
