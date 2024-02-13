import React, { useState, useEffect } from 'react';
import '../App.css';
import { Przycisk } from './Przycisk';
import './HeroSection.css';
import Cards2 from './Cards2';

export default function HeroSection16({ vehicle }) {
  const [isEmployee, setIsEmployee] = useState(false);
  const pojazd = vehicle[0];
  const [editData, setEditData] = useState({
    marka: pojazd.marka || '',
    model: pojazd.model || '',
    rok_produkcji: pojazd.rok_produkcji || '',
    cena: pojazd.cena || '',
    moc: pojazd.moc || '',
    przyspieszenie: pojazd.przyspieszenie || '',
    pojemnosc: pojazd.pojemnosc || '',
    przebieg: pojazd.przebieg || '',
    nr_rejestracyjny: pojazd.nr_rejestracyjny || '',
    kategoria: pojazd.kategoria || '',
    opis: pojazd.opis || '',
    skrzynia: pojazd.skrzynia || '',
    naped: pojazd.naped || '',
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const edytujPojazd = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Musisz być zalogowany jako pracownik, aby edytować pojazd');
      return;
    }

    try {
      const response = await fetch(`http://django:8000/zarzadzanie_pojazdami/edytuj_pojazd/${pojazd.nr_rejestracyjny}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        },
        body: JSON.stringify(editData),
      });

      if (response.ok) {
        alert('Informacje o pojeździe zostały zaktualizowane');
      } else {
        alert('Wystąpił błąd podczas edycji pojazdu');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Wystąpił błąd podczas edycji pojazdu');
    }
  };

  if (!isEmployee) {
    return <p>Brak uprawnień do edycji pojazdu.</p>;
  }

  return (
    <div className='kontener'>
      <video src='/filmy/video1.mp4' autoPlay loop muted />
      <h1>Edycja Pojazdu</h1>
      <div className='hero-btns'>
      <Przycisk className='btn' stylPrzycisku='btn--danger' rozmiarPrzycisku='btn--large' linkPrzycisku={'/Zarzadzanie'}>
            Zadzadzanie systemem
          </Przycisk>
          <Przycisk className='btn' stylPrzycisku='btn--danger' rozmiarPrzycisku='btn--large' linkPrzycisku={'/Edycja'}>
            Powrót
          </Przycisk>
          </div>
      <div className='rezervacja-wrapper'>
        <div className='cards-wrapper'>
          <Cards2 vehicles={[pojazd]} />
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
          <form className='formularz' onSubmit={edytujPojazd}>
          <input type='text' name='marka' value={editData.marka} onChange={handleInputChange} placeholder='Marka' />
          <input type='text' name='model' value={editData.model} onChange={handleInputChange} placeholder='Model' />
          <input type='number' name='rok_produkcji' value={editData.rok_produkcji} onChange={handleInputChange} placeholder='Rok produkcji' />
          <input type='number' name='cena' value={editData.cena} onChange={handleInputChange} placeholder='Cena' />
          <input type='number' name='moc' value={editData.moc} onChange={handleInputChange} placeholder='Moc (KM)' />
          <input type='text' name='przyspieszenie' value={editData.przyspieszenie} onChange={handleInputChange} placeholder='Przyspieszenie (s)' />
          <input type='text' name='pojemnosc' value={editData.pojemnosc} onChange={handleInputChange} placeholder='Pojemność silnika (L)' />
          <input type='number' name='przebieg' value={editData.przebieg} onChange={handleInputChange} placeholder='Przebieg (km)' />
          <input type='text' name='nr_rejestracyjny' value={editData.nr_rejestracyjny} onChange={handleInputChange} placeholder='Numer rejestracyjny' />
          <input type='text' name='kategoria' value={editData.kategoria} onChange={handleInputChange} placeholder='Kategoria' />
          <textarea name='opis' value={editData.opis} onChange={handleInputChange} placeholder='Opis'></textarea>
          <input type='text' name='skrzynia' value={editData.skrzynia} onChange={handleInputChange} placeholder='Skrzynia biegów' />
          <input type='text' name='naped' value={editData.naped} onChange={handleInputChange} placeholder='Napęd' />
</form>
          <Przycisk className='btn' stylPrzycisku='btn--primary' rozmiarPrzycisku='btn--large' onClick={edytujPojazd}>
            Edytuj Pojazd
          </Przycisk>
        </div>
      </div>
    </div>
  );
}
