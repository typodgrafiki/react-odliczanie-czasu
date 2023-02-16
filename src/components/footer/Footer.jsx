import React from 'react';
import './footer.css';

const Footer = ({today}) => {
    
    return (
        <footer>
            <p>Dzisiaj jest <span className="current-date">{today}</span></p>
        </footer>
    )
}

export default Footer