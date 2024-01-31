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
            <p>Wypożyczalnia Zygzak to dynamicznie rozwijająca się firma, która oferuje szeroki wybór samochodów w atrakcyjnych cenach.</p>
            <p>Naszym celem jest zapewnienie klientom komfortu i satysfakcji podczas podróży.</p>
            <p>Dzięki naszemu doświadczeniu oraz profesjonalnej obsłudze, staramy się sprostać oczekiwaniom nawet najbardziej wymagających kierowców.</p>
            <p>Dbamy o wysoką jakość naszych pojazdów oraz zapewniamy elastyczne warunki wynajmu, dostosowane do potrzeb każdego klienta.</p>
            <p>Zapraszamy do skorzystania z naszych usług i przeżycia niezapomnianej podróży z Wypożyczalnią Zygzak!</p>
      </div>
    </div>
  )
}
