import React from 'react';
import './Przycisk.css';
import { NavLink } from 'react-router-dom';

const STYLE = ['btn--primary', 'btn--outline'];
const ROZMIARY = ['btn--medium', 'btn--large'];

export const Przycisk = ({
    children, type, onClick, stylPrzycisku, rozmiarPrzycisku, linkPrzycisku
}) => {
    const sprawdzenieStylu = STYLE.includes(stylPrzycisku) ? stylPrzycisku : STYLE[0];
    const sprawdzenieRozmiaru = ROZMIARY.includes(rozmiarPrzycisku) ? rozmiarPrzycisku : ROZMIARY[0];

    const content = (
        <button
            className={`btn ${sprawdzenieStylu} ${sprawdzenieRozmiaru}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );

    return linkPrzycisku ? (
        <NavLink to={linkPrzycisku} className='btn-mobile'>
            {content}
        </NavLink>
    ) : content;
};
