import React, { useState, useEffect } from 'react';
import '../App.css';
import { Przycisk } from './Przycisk';
import './HeroSection.css';

export default function HeroSection9() {
  const [wypozyczenia, setWypozyczenia] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://django:8000/zarzadzanie_pojazdami/wypozyczenia_klienta/', {
        headers: {
          'Authorization': `Token ${token}`
        }
      })
      .then(response => response.json())
      .then(data => setWypozyczenia(data))
      .catch(error => console.error('Error:', error));
    }
  }, []);

  return (
    <div className='kontener'>
      <video src='/filmy/video1.mp4' autoPlay loop muted />
      <h1>Twoje wypożyczenia</h1>
      
      <div className='hero-btns'>
        <Przycisk className='btn' stylPrzycisku='btn--outline' rozmiarPrzycisku='btn--large' linkPrzycisku='/'>
          Strona Główna
        </Przycisk>
      </div>
      <table className='tabelacss'>
        <thead>
          <tr>
            <th>Marka pojazdu</th>
            <th>Model pojazdu</th>
            <th>Data wypożyczenia</th>
            <th>Ilość dni</th>
            <th>Status wypożyczenia</th>
            {/* <th>Czy opłacone</th> */}
          </tr>
        </thead>
        <tbody>
          {wypozyczenia.map((wypozyczenie, index) => (
            <tr key={index}>
              <td>{wypozyczenie.pojazd_marka}</td>
              <td>{wypozyczenie.pojazd_model}</td>
              <td>{wypozyczenie.data_wypozyczenia}</td>
              <td>{wypozyczenie.ilosc_dni}</td>
              <td>{wypozyczenie.status_wypozyczenia}</td>
              {/* <td>{wypozyczenie.czy_oplacone ? 'Tak' : 'Nie'}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
