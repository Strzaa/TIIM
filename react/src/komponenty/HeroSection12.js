import React, { useState, useEffect } from 'react';
import '../App.css';
import { Przycisk } from './Przycisk';
import './HeroSection.css';

export default function HeroSection12() {
  const [isEmployee, setIsEmployee] = useState(false);
  const [formData, setFormData] = useState({
    marka: '',
    model: '',
    rok_produkcji: '',
    cena: '',
    moc: '',
    przyspieszenie: '',
    pojemnosc: '',
    przebieg: '',
    nr_rejestracyjny: '',
    kategoria: '',
    opis: '',
    skrzynia: '',
    naped: '',
    zdjecie1: null,
    zdjecie2: null,
    zdjecie3: null,
    zdjecie4: null,
    zdjecie5: null,
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
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Musisz być zalogowany jako pracownik, aby dodać pojazd');
      return;
    }

    const dataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      dataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch('http://django:8000/zarzadzanie_pojazdami/dodaj_pojazd/', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`
        },
        body: dataToSend
      });

      if (response.ok) {
        alert('Pojazd został dodany');
        setFormData({
          marka: '',
          model: '',
          rok_produkcji: '',
          cena: '',
          moc: '',
          przyspieszenie: '',
          pojemnosc: '',
          przebieg: '',
          nr_rejestracyjny: '',
          kategoria: '',
          opis: '',
          skrzynia: '',
          naped: '',
          zdjecie1: null,
          zdjecie2: null,
          zdjecie3: null,
          zdjecie4: null,
          zdjecie5: null,
        });
      } else {
        alert('Wystąpił błąd podczas dodawania pojazdu');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Wystąpił błąd podczas dodawania pojazdu');
    }
  };

  if (!isEmployee) {
    return <p>Brak uprawnień do dodawania pojazdów.</p>;
  }

  return (
    <div className='kontener'>
      <video src='/filmy/video1.mp4' autoPlay loop muted />
      <h1>Dodanie Pojazdu</h1>
      <div className='hero-btns'>
        <Przycisk className='btn' stylPrzycisku='btn--primary' rozmiarPrzycisku='btn--large' linkPrzycisku='/'>
          Strona Główna
        </Przycisk>
        <Przycisk className='btn' stylPrzycisku='btn--primary' rozmiarPrzycisku='btn--large' linkPrzycisku='/Zarzadzanie'>
          Powrót
        </Przycisk>
      </div>
      <form className='formularz' onSubmit={handleSubmit}>
        <input type='text' name='marka' placeholder='Marka' onChange={handleInputChange} value={formData.marka} />
        <input type='text' name='model' placeholder='Model' onChange={handleInputChange} value={formData.model} />
        <input type='number' name='rok_produkcji' placeholder='Rok produkcji' onChange={handleInputChange} value={formData.rok_produkcji} />
        <input type='text' name='cena' placeholder='Cena' onChange={handleInputChange} value={formData.cena} />
        <input type='number' name='moc' placeholder='Moc (KM)' onChange={handleInputChange} value={formData.moc} />
        <input type='text' name='przyspieszenie' placeholder='Przyspieszenie (s)' onChange={handleInputChange} value={formData.przyspieszenie} />
        <input type='text' name='pojemnosc' placeholder='Pojemność silnika (L)' onChange={handleInputChange} value={formData.pojemnosc} />
        <input type='number' name='przebieg' placeholder='Przebieg (km)' onChange={handleInputChange} value={formData.przebieg} />
        <input type='text' name='nr_rejestracyjny' placeholder='Numer rejestracyjny' onChange={handleInputChange} value={formData.nr_rejestracyjny} />
        <input type='text' name='kategoria' placeholder='Kategoria' onChange={handleInputChange} value={formData.kategoria} />
        <textarea name='opis' placeholder='Opis' onChange={handleInputChange} value={formData.opis}></textarea>
        <input type='text' name='skrzynia' placeholder='Skrzynia biegów' onChange={handleInputChange} value={formData.skrzynia} />
        <input type='text' name='naped' placeholder='Napęd' onChange={handleInputChange} value={formData.naped} />
        <input type='file' name='zdjecie1' onChange={handleInputChange} />
        <input type='file' name='zdjecie2' onChange={handleInputChange} />
        <input type='file' name='zdjecie3' onChange={handleInputChange} />
        <input type='file' name='zdjecie4' onChange={handleInputChange} />
        <input type='file' name='zdjecie5' onChange={handleInputChange} />

        <Przycisk type='submit' stylPrzycisku='btn--primary'>Dodaj Pojazd</Przycisk>
      </form>
    </div>
  );
}
