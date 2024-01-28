import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function CardsMarki() {
  return (
    <div className='cards2'>
        <h2>Marki Naszych Samochodów</h2>
        <div className='cards-kontener2'>
            <div className='cards-wrapper'>
            <ul className='cards-items'>
                <CardItem 
                src='/zdjecia/img0.jpg'
                text='Porche'
                label=''
                path='/Porche'
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src='/zdjecia/img1.jpg'
                text='Ferrari'
                label=''
                path='/Ferrari'
                />

            </ul>
            <ul className='cards-items'>
                <CardItem 
                src='/zdjecia/img2.jpg'
                text='Lamborghini'
                label=''
                path='/Lamborghini'
                />
            </ul>
            </div>
        </div>
    </div>
  )
}

export default CardsMarki