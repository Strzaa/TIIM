import React, { useState, useEffect } from 'react';
import '../App.css';
import { Przycisk } from './Przycisk';
import './HeroSection.css';
import Cards3 from './Cards3';

export default function HeroSection16({ vehicle }) {
  const [isEmployee, setIsEmployee] = useState(false);
  const pojazd = vehicle[0];

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserGroup(token);
    }
  }, []);

  const fetchUserGroup = async (token) => {
    try {
      const response = await fetch('http://django:8000/zarzadzanie_pojazdami/jaka_grupa/', {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      const data = await response.json();
      if (response.ok && data.grupa.includes('Pracownik')) {
        setIsEmployee(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const usunPojazd = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Musisz być zalogowany jako pracownik, aby usunąć pojazd');
      return;
    }

    try {
      const response = await fetch(`http://django:8000/zarzadzanie_pojazdami/usun_pojazd/${pojazd.nr_rejestracyjny}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Token ${token}`
        }
      });

      if (response.ok) {
        alert('Pojazd został usunięty');
      } else {
        alert('Wystąpił błąd podczas usuwania pojazdu');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Wystąpił błąd podczas usuwania pojazdu');
    }
  };

  if (!isEmployee) {
    return <p>Brak uprawnień do usuwania pojazdu.</p>;
  }

  return (
    <div className='kontener'>
      <video src='/filmy/video1.mp4' autoPlay loop muted />
      <h1>Usunięcie Pojazdu</h1>
      <div className='hero-btns'>
      <Przycisk className='btn' stylPrzycisku='btn--danger' rozmiarPrzycisku='btn--large' linkPrzycisku={'/Zarzadzanie'}>
            Zadzadzanie systemem
          </Przycisk>
          <Przycisk className='btn' stylPrzycisku='btn--danger' rozmiarPrzycisku='btn--large' linkPrzycisku={'/Usuniecie'}>
            Powrót
          </Przycisk>
          </div>
      <div className='rezervacja-wrapper'>
        <div className='cards-wrapper'>
          <Cards3 vehicles={[pojazd]} />
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
          <Przycisk className='btn' stylPrzycisku='btn--danger' rozmiarPrzycisku='btn--large' onClick={usunPojazd}>
            Usuń Pojazd
          </Przycisk>
        </div>
      </div>
    </div>
  );
}
