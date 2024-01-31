import React, { useState } from 'react';
import '../../App.css';
import { Przycisk } from '../Przycisk';
import { useNavigate } from 'react-router-dom';
import '../HeroSection.css';

export default function Informacje() {
  const navigate = useNavigate();

  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: ''
  });

  const [blikCode, setBlikCode] = useState('');

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleBlikInputChange = (e) => {
    setBlikCode(e.target.value);
  };

  const handlePaymentClick = () => {
    alert('Płatność zrealizowana pomyślnie');
    navigate(`/Zamowienia`);
  };

  return (
    <div className="kontener">
      <video src="/filmy/video1.mp4" autoPlay loop muted />
      <h1>PŁATNOŚĆ</h1>

      <div className="platnosc-container">
        <div className="form-container">
          <h2>Dane karty kredytowej</h2>
          <form>
            <label>Numer karty:</label>
            <input
              type="text"
              name="cardNumber"
              value={cardData.cardNumber}
              onChange={handleCardInputChange}
            />

            <label>Właściciel karty:</label>
            <input
              type="text"
              name="cardHolder"
              value={cardData.cardHolder}
              onChange={handleCardInputChange}
            />

            <label>Data ważności:</label>
            <input
              type="text"
              name="expirationDate"
              value={cardData.expirationDate}
              onChange={handleCardInputChange}
            />

            <label>CVV:</label>
            <input
              type="text"
              name="cvv"
              value={cardData.cvv}
              onChange={handleCardInputChange}
            />
          </form>
        </div>

        <div className="form-container">
          <h2>Płatność BLIK</h2>
          <form>
            <label>Kod BLIK:</label>
            <input
              type="text"
              name="blikCode"
              value={blikCode}
              onChange={handleBlikInputChange}
            />
          </form>
        </div>
      </div>

      <div className="hero-btns">
        <Przycisk
          className="btn"
          stylPrzycisku={'btn--outline'}
          rozmiarPrzycisku={'btn--large'}
          onClick={handlePaymentClick}
        >
          Zapłać
        </Przycisk>
      </div>
    </div>
  );
}
