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
        </Routes>
      </Router>
    </>
  );
}

export default App;
