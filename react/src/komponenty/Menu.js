import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Przycisk } from './Przycisk';
import './Przycisk.css';
import './Menu.css';
import zygzakLogo from './unnamed.png';  // Dodaj import

function Menu() {
  const [klikniecie, stanKlikniecia] = useState(false);
  const obslugaKlikniecia = () => stanKlikniecia(!klikniecie);
  const zamknijNawigator = () => stanKlikniecia(false);
  const [przycisk, stanPrzycisku] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userGroup, setUserGroup] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    if (token) {
      fetchUserGroup(token);
    }
  }, []);

  const fetchUserGroup = async (token) => {
    try {
      const response = await fetch('http://20.83.148.157:8000/zarzadzanie_pojazdami/jaka_grupa/', {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        setUserGroup(data.grupa[0]); // Ustawiamy grupę użytkownika
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.reload();
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const pokazPrzycisk = () => {
    if (window.innerWidth <= 960) {
      stanPrzycisku(false);
    } else {
      stanPrzycisku(true);
    }
  };

  useEffect(() => {
    pokazPrzycisk();
    window.addEventListener('resize', pokazPrzycisk);
    return () => window.removeEventListener('resize', pokazPrzycisk);
  }, []);

  return (
    <>
      <nav className='menu'>
        <div className='menu-kontener'>
          <Link to='/' className='menu-logo' onClick={zamknijNawigator}>
          <img src={zygzakLogo} alt='Logo' className='logo-img' /> ZYGZAK <i className='link-tekst-menu' />
          </Link>
          <div className='menu-ikona' onClick={obslugaKlikniecia}>
            <i className={klikniecie ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={klikniecie ? 'nawigator-aktywny' : 'nawigator-nieaktywny'}>
          <li className = 'podmiot-nawigatora0'>
                  <Link to = '/Auta' className = 'nawigator-linki' onClick={zamknijNawigator}>
                    Auta
                  </Link>
                  </li>
                  <li className = 'podmiot-nawigatora0'>
                  <Link to = '/Informacje' className = 'nawigator-linki' onClick={zamknijNawigator}>
                    Informacje
                  </Link>
                </li>
                  <li className = 'podmiot-nawigatora0'>
                  <Link to = '/Kontakt' className = 'nawigator-linki' onClick={zamknijNawigator}>
                    Kontakt
                  </Link>
                </li>
                <li className = 'podmiot-nawigatora1'>
                <Link
                to='/Auta'
                className='nav-links-mobile'
                onClick={zamknijNawigator}
              >
                Auta
              </Link>
                  </li>
                  <li className = 'podmiot-nawigatora1'>
                  <Link
                to='/Informacje'
                className='nav-links-mobile'
                onClick={zamknijNawigator}
              >
                Informacje
              </Link>
                </li>
                <li className = 'podmiot-nawigatora1'>
              <Link
                to='/Kontakt'
                className='nav-links-mobile'
                onClick={zamknijNawigator}
              >
                Kontakt
              </Link>
            </li>
            {!isLoggedIn && (
              <li className='podmiot-nawigatora1'>
                <Link to='/Rejestracja' className='nav-links-mobile' onClick={zamknijNawigator}>
                  Zarejestruj się
                </Link>
              </li>
            )}
            {!isLoggedIn && (
              <li className='podmiot-nawigatora1'>
                <Link to='/Logowanie' className='nav-links-mobile' onClick={zamknijNawigator}>
                  Zaloguj się
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li className='podmiot-nawigatora1'>
                <Link to='/Zamowienia' className='nav-links-mobile' onClick={zamknijNawigator}>
                  Twoje Wypozyczenia
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li className='podmiot-nawigatora1'>
                <Link onClick={handleLogout} to='/' className='nav-links-mobile' >
                Wyloguj Się
                </Link>
              </li>
            )}
          </ul>
          {przycisk && !isLoggedIn && (
            <>
              <Przycisk className='btn--outline' stylPrzycisku='btn--outline' linkPrzycisku='/Rejestracja'>
                Zarejestruj się
              </Przycisk>
              <Przycisk className='btn--outline' stylPrzycisku='btn--outline' linkPrzycisku='/Logowanie'>
                Zaloguj się
              </Przycisk>
            </>
          )}
          {przycisk && isLoggedIn &&  (
            <>
            {userGroup == 'Pracownik' ?(
            <Przycisk className='btn--outline' stylPrzycisku='btn--outline' linkPrzycisku='/Zarzadzanie'>
                Zarzadzanie Systemem
              </Przycisk>
            ):(
            <Przycisk className='btn--outline' stylPrzycisku='btn--outline' linkPrzycisku='/Zamowienia'>
                Twoje Wypozyczenia
              </Przycisk>
                )}
              <Przycisk onClick={handleLogout} className='btn--outline' stylPrzycisku='btn--outline'>
                Wyloguj Się
              </Przycisk>
            </>
          )
          }
        </div>
      </nav>
    </>
  );
}

export default Menu;