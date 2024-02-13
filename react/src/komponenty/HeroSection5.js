import React, { useState } from 'react';
import '../App.css';
import { Przycisk } from './Przycisk';
import './HeroSection.css';

export default function HeroSection5() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('Próba rejestracji');

    const requestBody = {
      username: username,
      password: password,
      email: email,
      first_name: firstName,
      last_name: lastName,
    };

    try {
      const response = await fetch('http://django:8000/zarzadzanie_pojazdami/rejestracja/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Rejestracja pomyślna');
        alert('Rejestracja zakończona sukcesem');
      } else {
        console.error('Błąd rejestracji', data);
        alert('Błąd rejestracji');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Wystąpił błąd podczas rejestracji');
    }
  };

  return (
    <div className='kontener'>
      <video src='/filmy/video1.mp4' autoPlay loop muted />
      <h1>Rejestracja</h1>

      <div className='hero-btns'>
        <form className='formularz' onSubmit={handleRegister}>
          <input
            className='username-input'
            name='username'
            type='text'
            placeholder='Nazwa użytkownika'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='haslo-input'
            name='haslo'
            type='password'
            placeholder='Hasło'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className='email-input'
            name='email'
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='imie-input'
            name='imie'
            type='text'
            placeholder='Imię'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className='nazwisko-input'
            name='nazwisko'
            type='text'
            placeholder='Nazwisko'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Przycisk type='submit' stylPrzycisku='btn--primary'>
            Zarejestruj się
          </Przycisk>
        </form>
      </div>
    </div>
  );
}
