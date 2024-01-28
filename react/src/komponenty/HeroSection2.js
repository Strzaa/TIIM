import React , {useState} from 'react'
import '../App.css'
import { Przycisk } from './Przycisk'
import './HeroSection.css'

export default function HeroSection2() {

  const ProductFilter = ({ brands, onBrandSelect }) => {
    const [selectedBrand, setSelectedBrand] = useState('');
  
    const handleChange = (e) => {
      setSelectedBrand(e.target.value);
      onBrandSelect(e.target.value);
    };
    return (
      <select value={selectedBrand} onChange={handleChange}>
        <option value="">Wszystkie marki</option>
        {brands.map(brand => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>
    );
  };

  const brands = ["Marka A", "Marka B", "Marka C"]; // Przykładowe marki
  const rodzaje = ["Rodzaj A", "Rodzaj B", "Rodzaj C"]; // Przykładowe marki
  

  const handleBrandSelect = (brand) => {
    // Tutaj możesz wywołać logikę filtracji
    console.log(`Wybrana marka: ${brand}`);
  };


  
  return (
    <div className = 'kontener'>
        <video src='/filmy/video1.mp4' autoPlay loop muted />
        <h1>Auta</h1>
        
        <div className = 'hero-btns'>
            <Przycisk className = 'btn' stylPrzycisku={'btn--outline'}
            rozmiarPrzycisku={'btn--large'}
            linkPrzycisku={'/'}>
              Strona Głowna</Przycisk>
              <div className='Filtry'>
              <ProductFilter brands={brands} onBrandSelect={handleBrandSelect} />
              <ProductFilter brands={rodzaje} onBrandSelect={handleBrandSelect} />
              </div>
        </div>
        
    </div>
  )
}
