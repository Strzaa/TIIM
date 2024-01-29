import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards({ vehicles }) {
  return (
    <div className='cards'>
      <div className='cards-kontener'>
        <div className='cards-wrapper'>
          {vehicles.map((vehicle, index) => (
            <ul className='cards-items' key={index}>
              <CardItem 
                src={vehicle.zdjecie1}
                text={vehicle.model}
                label={vehicle.marka}
                path='/Rezerwacja'
                id={vehicle.id}
              />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;