import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards2({ vehicles }) {
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
                path='/Edycja'
                id={vehicle.id}
              />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards2;