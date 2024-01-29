import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ src, text, label, path, id }) {
  return (
    <li className='cards-item'>
      <Link to={`${path}/${id}`} className='cards-item-link'>
        <div className='cards-item-pic-wrap' data-category={label}>
          <img src={src} alt='Travel Image' className='cards-item-img' />
        </div>
        <div className='cards-item-info'>
          <h5 className='cards-item-text'>{text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
