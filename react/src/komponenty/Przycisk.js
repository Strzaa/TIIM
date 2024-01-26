import React from 'react';
import './Przycisk.css';
import { NavLink } from 'react-router-dom';

const STYLE = ['btn--primary', 'btn--outline']

const ROZMIARY = ['btn--medium','btn--large']

export const Przycisk = ({
    children, type, stanKlikniecia, stylPrzycisku, rozmiarPrzycisku, linkPrzycisku
}) => 
{
    const sprawdzenieStylu = STYLE.includes(stylPrzycisku) ? stylPrzycisku : STYLE[0]
    const sprawdzenieRozmiaru = ROZMIARY.includes(rozmiarPrzycisku) ? rozmiarPrzycisku : ROZMIARY[0]

    return(
        <NavLink to= {linkPrzycisku} className='btn-mobile'>
           <button
           className={`btn ${sprawdzenieStylu} ${sprawdzenieRozmiaru}`}
           stanKlikniecia = {stanKlikniecia}
           type = {type}
           >
            {children}
            </button> 
        </NavLink>
    )
};