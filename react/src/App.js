import React from 'react';
import Menu from './komponenty/Menu';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './komponenty/strony/Home'
import Informacje from './komponenty/strony/Informacje'
import Kontakt from './komponenty/strony/Kontakt'
import Rejestracja from './komponenty/strony/Rejestracja'
import Logowanie from './komponenty/strony/Logowanie'
import Zwiastun from './komponenty/strony/Zwiastun'
import Auta from './komponenty/strony/Auta'
function App() {
  return (
    <>
    <Router>
      < Menu />
      <Routes>
        <Route path = '/' exact Component={Home} />
        <Route path ='/Informacje' exact Component={Informacje}/>
        <Route path ='/Kontakt' exact Component={Kontakt}/>
        <Route path ='/Rejestracja' exact Component={Rejestracja}/>
        <Route path ='/Logowanie' exact Component={Logowanie}/>
        <Route path ='/Auta' exact Component={Auta}/>
        <Route path ='/Zwiastun' exact Component={Zwiastun}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;