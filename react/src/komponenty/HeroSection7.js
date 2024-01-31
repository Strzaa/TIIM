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
    <h2>Wypożyczalnia Samochodów "Zygzak"</h2>

    <p><strong>Adres:</strong> ul. Przykładowa 123, 00-000 Miasto</p>

    <p><strong>Telefon:</strong> +48 123 456 789</p>

    <p><strong>E-mail:</strong> info@wypozyczalnia-zygzak.pl</p>

    <p><strong>Godziny otwarcia:</strong></p>
    <ul>
        <li>Poniedziałek - Piątek: 8:00 - 18:00</li>
        <li>Sobota: 9:00 - 15:00</li>
        <li>Niedziela: Zamknięte</li>
    </ul>

    <p>Zapraszamy do kontaktu telefonicznego lub mailowego w celu rezerwacji samochodu lub uzyskania dodatkowych informacji na temat naszych usług. Nasz zespół obsługi klienta służy pomocą w każdej sprawie związanej z wynajmem samochodów.</p>
</div>
    </div>
  )
}
