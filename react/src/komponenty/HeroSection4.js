import React from 'react'
import '../App.css'
import { Przycisk } from './Przycisk'
import './HeroSection.css'

export default function HeroSection4() {
  return (
    <div className = 'kontener'>
        <video src='/filmy/video1.mp4' autoPlay loop muted />
        <h1>Logowanie</h1>
        
        <div className = 'hero-btns'>
            <form>
            <input
              className='email-input'
              name='email'
              type='email'
              placeholder='E-mail'
            />
          </form>
          <form>
            <input
              className='haslo-input'
              name='haslo'
              type='haslo'
              placeholder='Haslo'
            />
          </form>
          <Przycisk className = 'btn--outline' stylPrzycisku={'btn--outline'} >Zaloguj sie</Przycisk>
        </div>
    </div>
  )
}
