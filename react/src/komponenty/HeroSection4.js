import React, { useState } from 'react';
import '../App.css';
import { Przycisk } from './Przycisk';
import './HeroSection.css';

export default function HeroSection4() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Próba logowania');

    try {
      const response = await fetch('http://django:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        console.log('Zalogowano pomyślnie');
        window.location.href = '/'
      } else {
        console.error('Błąd logowania', data);
      }
    } catch (error) {
      console.error('Błąd:', error);
    }
  };

  return (
    <div className='kontener'>
      <video src='/filmy/video1.mp4' autoPlay loop muted />
      <h1>Logowanie</h1>

      <div className='hero-btns'>
        <form className='formularz' onSubmit={handleLogin}>
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
          <Przycisk  type='submit' stylPrzycisku='btn--primary'>
            Zaloguj się
          </Przycisk>
        </form>
      </div>
    </div>
  );
}
