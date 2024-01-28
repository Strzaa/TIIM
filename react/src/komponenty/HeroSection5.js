import React from 'react'
import '../App.css'
import { Przycisk } from './Przycisk'
import './HeroSection.css'

export default function HeroSection5() {
  return (
    <div className = 'kontener'>
        <video src='/filmy/video1.mp4' autoPlay loop muted />
        <h1>Rejestracja</h1>
        
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
              type='password'
              placeholder='Haslo'
            />
          </form>
          <Przycisk className = 'btn--outline' stylPrzycisku={'btn--outline'} >Zarejestruj się</Przycisk>
        </div>
    </div>
  )
}
