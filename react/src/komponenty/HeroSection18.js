// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection18 from './HeroSection18';
import Platnosc from './Platnosc';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/hero-section-18/:id' element={<HeroSection18 />} />
        <Route path='/platnosc/:id' element={<Platnosc />} />
        {/* Inne trasy */}
      </Routes>
    </Router>
  );
}

export default App;
