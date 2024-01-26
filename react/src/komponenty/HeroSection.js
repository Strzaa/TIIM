import React from 'react'
import '../App.css'
import { Przycisk } from './Przycisk'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <div className = 'kontener'>
        <video src='/filmy/video1.mp4' autoPlay loop muted />
        <h1>Twoje wymarzone auto już czeka</h1>
        
        <div className = 'hero-btns'>
            <Przycisk className = 'btn' stylPrzycisku={'btn--outline'}
            rozmiarPrzycisku={'btn--large'}
            linkPrzycisku={'/Auta'}>
              WYNAJMIJ JUZ DZIS</Przycisk>

            <Przycisk 
            className = 'btn' 
            stylPrzycisku={'btn--primary'}
            rozmiarPrzycisku={'btn--large'}
            linkPrzycisku={'/Zwiastun'}>
              ZOBACZ CO TRACISZ 
              <i className='farfa-play-circe' /></Przycisk>
        </div>
    </div>
  )
}
