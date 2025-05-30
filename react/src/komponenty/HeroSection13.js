import React, { useState, useEffect } from 'react';
import '../App.css';
import { Przycisk } from './Przycisk';
import './HeroSection.css';
import Cards2 from './Cards2';

const ProductFilter = ({ options, onOptionSelect, filterType }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    onOptionSelect(e.target.value, filterType);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="">Wszystkie {filterType}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
};

const VehicleList = ({ vehicles }) => (
  <div>
    {vehicles.map(vehicle => (
      <div key={vehicle.id} className="vehicle">
        <h2>{vehicle.marka} {vehicle.model}</h2>
        <p>Rok produkcji: {vehicle.rok_produkcji}</p>
        <p>Cena: {vehicle.cena}</p>
        <img src={vehicle.zdjecie1} alt={`Zdjęcie ${vehicle.marka} ${vehicle.model}`} />
      </div>
    ))}
  </div>
);

export default function HeroSection2() {
  const [vehicles, setVehicles] = useState([]);
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    fetch('http://django:8000/zarzadzanie_pojazdami/wylistuj_marki/')
      .then(response => response.json())
      .then(data => setBrands(data))
      .catch(error => console.error('Error:', error));

    fetch('http://django:8000/zarzadzanie_pojazdami/wylistuj_kategorie/')
      .then(response => response.json())
      .then(data => setTypes(data))
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    fetchVehicles();
  }, [selectedBrand, selectedType]);

  const fetchVehicles = () => {
    const brandQuery = selectedBrand ? `&marka=${selectedBrand}` : '';
    const typeQuery = selectedType ? `&kategoria=${selectedType}` : '';

    fetch(`http://django:8000/zarzadzanie_pojazdami/wyszukaj_pojazdy/?format=json${brandQuery}${typeQuery}`)
      .then(response => response.json())
      .then(data => setVehicles(data))
      .catch(error => console.error('Error:', error));
  };

  const handleOptionSelect = (option, filterType) => {
    if (filterType === 'brand') {
      setSelectedBrand(option);
    } else if (filterType === 'type') {
      setSelectedType(option);
    }
  };

  return (
    <div className='kontener'>
      <video src='/filmy/video1.mp4' autoPlay loop muted />
      <h1>Edycja</h1>

      <div className='hero-btns'>
        <Przycisk className='btn' stylPrzycisku='btn--outline' rozmiarPrzycisku='btn--large' linkPrzycisku='/'>
          Strona Główna
        </Przycisk>
        <Przycisk className='btn' stylPrzycisku='btn--outline' rozmiarPrzycisku='btn--large' linkPrzycisku='/Zarzadzanie'>
          Powrót
        </Przycisk>
        </div>
        <ul className = 'Filtry'>
        <ProductFilter options={brands}  onOptionSelect={handleOptionSelect} filterType="brand" />
        <ProductFilter options={types} onOptionSelect={handleOptionSelect} filterType="type" />
        </ul>
        <Cards2  vehicles={vehicles} />
      </div>
  );
}
