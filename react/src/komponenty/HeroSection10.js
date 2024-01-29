import React from 'react'
import '../App.css'
import { Przycisk } from './Przycisk'
import './HeroSection.css'

export default function HeroSection10() {
  return (
    <div className = 'kontener'>
        <video src='/filmy/video1.mp4' autoPlay loop muted />
        <h1>Ferrari</h1>
        
        <div className = 'hero-btns'>
            <Przycisk className = 'btn' stylPrzycisku={'btn--outline'}
            rozmiarPrzycisku={'btn--large'}
            linkPrzycisku={'/'}>
              Strona Głowna</Przycisk>
              <Przycisk className = 'btn' stylPrzycisku={'btn--outline'}
            rozmiarPrzycisku={'btn--large'}
            linkPrzycisku={'/Auta'}>
              Powrót  </Przycisk>
        </div>
    </div>
  )
}
