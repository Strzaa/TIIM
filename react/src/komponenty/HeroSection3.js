import React from 'react'
import '../App.css'
import { Przycisk } from './Przycisk'
import './HeroSection.css'

export default function HeroSection3() {
  return (
    <div className = 'kontener'>
        <video src='/filmy/video3.mp4' autoPlay loop />
        <h1>Zwiastun</h1>
        
        <div className = 'hero-btns'>
            <Przycisk className = 'btn' stylPrzycisku={'btn--outline'}
            rozmiarPrzycisku={'btn--large'}
            linkPrzycisku={'/'}>
              Strona Głowna</Przycisk>
        </div>
    </div>
  )
}
