import React from 'react'
import '../App.css'
import { Przycisk } from './Przycisk'
import './HeroSection.css'

export default function HeroSection6() {
  return (
    <div className = 'kontener'>
        <video src='/filmy/video1.mp4' autoPlay loop muted />
        <h1>Informacje</h1>
        
        <div className = 'hero-btns'>
            <Przycisk className = 'btn' stylPrzycisku={'btn--outline'}
            rozmiarPrzycisku={'btn--large'}
            linkPrzycisku={'/'}>
              Strona Głowna</Przycisk>
        </div>
        <div>
          <h1>Firma zalozona przez 4 kolegow ktorzy chca sie dorobic i przy okazji sie nie narobic</h1>
        </div>
    </div>
  )
}
