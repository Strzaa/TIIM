import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>OBCZAJ NASZE NAJNOWESZE FURY</h1>
        <div className='cards-kontener'>
            <div className='cards-wrapper'>
            <ul className='cards-items'>
                <CardItem 
                src='/zdjecia/img0.jpg'
                text='Canyenne'
                label='Porche'
                path='/uslugi'
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src='/zdjecia/img1.jpg'
                text='SF90'
                label='Ferrari'
                path='/uslugi'
                />

            </ul>
            <ul className='cards-items'>
                <CardItem 
                src='/zdjecia/img2.jpg'
                text='The Essenza SCV12'
                label='Lamborghini'
                path='/uslugi'
                />
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards