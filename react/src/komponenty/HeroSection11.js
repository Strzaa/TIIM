import React from 'react'
import '../App.css'
import { Przycisk } from './Przycisk'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <div className = 'kontener'>
        <video src='/filmy/video1.mp4' autoPlay loop muted />
        <h1>Zarzadzanie</h1>
        
        <div className = 'hero-btns'>
            <Przycisk className = 'btn' stylPrzycisku={'btn--primary'}
            rozmiarPrzycisku={'btn--large'}
            linkPrzycisku={'/'}>
              Strona Główna
              </Przycisk>
              <Przycisk className = 'btn' stylPrzycisku={'btn--primary'}
            rozmiarPrzycisku={'btn--large'}
            linkPrzycisku={'/Dodanie'}>
              Dodanie Pojazdu
              </Przycisk>
              <Przycisk className = 'btn' stylPrzycisku={'btn--primary'}
            rozmiarPrzycisku={'btn--large'}
            linkPrzycisku={'/Edycja'}>
              Edycja Pojazdu
              </Przycisk>
              <Przycisk className = 'btn' stylPrzycisku={'btn--primary'}
            rozmiarPrzycisku={'btn--large'}
            linkPrzycisku={'/Usuniecie'}>
              Usuniecie Pojazdu
              </Przycisk>
        </div>
    </div>
  )
}
