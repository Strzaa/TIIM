import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import { Przycisk } from './Przycisk';
import './HeroSection.css';
import Cards from './Cards';

export default function HeroSection10({ vehicle }) {
  const { id } = useParams();
  const [dataWypozyczenia, setDataWypozyczenia] = useState('');
  const [iloscDni, setIloscDni] = useState('');
  const pojazd = vehicle[0];
  const navigate = useNavigate();

  const wynajmijPojazd = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Musisz być zalogowany, aby wynająć pojazd');
      return;
    }

    const requestBody = {
      pojazd: id,
      data_wypozyczenia: dataWypozyczenia,
      ilosc_dni: iloscDni
    };

    try {
      const response = await fetch('http://20.83.148.157:8000/zarzadzanie_pojazdami/wypozycz_pojazd/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        alert('Pojazd został wynajęty');
        navigate(`/Platnosc`);
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

      <div className='rezervacja-wrapper'>
        <div className='cards-wrapper'>
          <Cards vehicles={[pojazd]} />
        </div>

        <div className='vehicle-details'>
          <h2>Marka: {pojazd.marka}</h2>
          <h2>Model: {pojazd.model}</h2>
          <h2>Rok produkcji: {pojazd.rok_produkcji}</h2>
          <h2>Moc: {pojazd.moc} KM</h2>
          <h2>Przyspieszenie: {pojazd.przyspieszenie} s</h2>
          <h2>Pojemność silnika: {pojazd.pojemnosc} L</h2>
          <h2>Przebieg: {pojazd.przebieg} km</h2>
          <h2>Numer rejestracyjny: {pojazd.nr_rejestracyjny}</h2>
          <h2>Kategoria: {pojazd.kategoria}</h2>
          <h2>Cena: {pojazd.cena} zł/dzień</h2>
          <div className='hero-btns'>
        <input type='date' className='datawybor' value={dataWypozyczenia} onChange={(e) => setDataWypozyczenia(e.target.value)} />
        <input type='number' className='datawybor' value={iloscDni} placeholder='Ilość dni' onChange={(e) => setIloscDni(e.target.value)} />
        <Przycisk className='btn' stylPrzycisku='btn--outline' rozmiarPrzycisku='btn--large' onClick={wynajmijPojazd}>
          Wynajmij
        </Przycisk>
        <Przycisk className='btn' stylPrzycisku='btn--outline' rozmiarPrzycisku='btn--large' linkPrzycisku={'/Auta'}>
          Powrót
        </Przycisk>
      </div>
        </div>
      </div>

      
    </div>
  );
}
