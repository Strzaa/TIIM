import React from 'react';
import Menu from './komponenty/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './komponenty/strony/Home';
import Informacje from './komponenty/strony/Informacje';
import Kontakt from './komponenty/strony/Kontakt';
import Rejestracja from './komponenty/strony/Rejestracja';
import Logowanie from './komponenty/strony/Logowanie';
import Zwiastun from './komponenty/strony/Zwiastun';
import Auta from './komponenty/strony/Auta';
import Rezerwacja from './komponenty/strony/Rezerwacja';
import Platnosc from './komponenty/strony/Platnosc';
import Zamowienia from './komponenty/strony/Zamowienia';
import Zarzadzanie from './komponenty/strony/Zarzadzanie';
import Dodanie from './komponenty/strony/Dodanie';
import Edycja from './komponenty/strony/Edycja';
import Usuniecie from './komponenty/strony/Usuniecie';
import Zmiana from './komponenty/strony/Zmiana';
import Usun from './komponenty/strony/Usun';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Informacje' element={<Informacje />} />
          <Route path='/Kontakt' element={<Kontakt />} />
          <Route path='/Rejestracja' element={<Rejestracja />} />
          <Route path='/Logowanie' element={<Logowanie />} />
          <Route path='/Auta' element={<Auta />} />
          <Route path='/Zwiastun' element={<Zwiastun />} />
          <Route path="/Rezerwacja/:id" element={<Rezerwacja />} />
          <Route path="/Platnosc" element={<Platnosc />} />
          <Route path = "/Zamowienia"  element={<Zamowienia/>}/>
          <Route path = "/Zarzadzanie" element={<Zarzadzanie/>}/>
          <Route path = "/Dodanie" element={<Dodanie/>}/>
          <Route path = "/Edycja" element={<Edycja/>}/>
          <Route path = "/Usuniecie" element={<Usuniecie/>}/>
          <Route path="/Edycja/:id" element={<Zmiana />} />
          <Route path="/Usuniecie/:id" element={<Usun />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
