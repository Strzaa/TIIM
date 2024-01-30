import React from 'react'
import '../App.css'
import { Przycisk } from './Przycisk'
import './HeroSection.css'

export default function HeroSection7() {
  return (
    <div className = 'kontener'>
        <video src='/filmy/video1.mp4' autoPlay loop />
        <h1>Kontakt</h1>
        
        <div className = 'hero-btns'>
            <Przycisk className = 'btn' stylPrzycisku={'btn--outline'}
            rozmiarPrzycisku={'btn--large'}
            linkPrzycisku={'/'}>
              Strona Głowna</Przycisk>
        </div>
        <div>
          <h1>Dzial obsługi klienta: 001-010-011</h1>
          <h1>Dział obsługi klientów biznesowych: 001-010-011</h1>
          <h1>Wspolpraca: 001-010-011</h1>
          </div>
    </div>
  )
}
