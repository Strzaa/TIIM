import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import { Przycisk } from './Przycisk';
import './HeroSection.css';
import Cards from './Cards';

export default function HeroSection10({ vehicle }) {
  const { id } = useParams(); // Pobieranie ID pojazdu z URL
  const [dataWypozyczenia, setDataWypozyczenia] = useState('');
  const [iloscDni, setIloscDni] = useState('');

  const wynajmijPojazd = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Musisz być zalogowany, aby wynająć pojazd');
      return;
    }

    const requestBody = {
      pojazd: id, // Używanie ID z URL
      data_wypozyczenia: dataWypozyczenia,
      ilosc_dni: iloscDni
    };

    try {
      const response = await fetch('http://django:8000/zarzadzanie_pojazdami/wypozycz_pojazd/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        alert('Pojazd został wynajęty');
      } else {
        alert('Wystąpił błąd podczas wynajmowania pojazdu');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Wystąpił błąd podczas wynajmowania pojazdu');
    }
  };

  return (
    <div className='kontener'>
      <video src='/filmy/video1.mp4' autoPlay loop muted />
      <h1>Rezerwacja</h1>

      <Cards vehicles={vehicle} />

      <div className='hero-btns'>
        <input type='date' value={dataWypozyczenia} onChange={(e) => setDataWypozyczenia(e.target.value)} />
        <input type='number' value={iloscDni} placeholder='Ilość dni' onChange={(e) => setIloscDni(e.target.value)} />
        <Przycisk className='btn' stylPrzycisku='btn--outline' rozmiarPrzycisku='btn--large' onClick={wynajmijPojazd}>
          Wynajmij
        </Przycisk>
      </div>
    </div>
  );
}
