import React from 'react';
import './christmas.css';

const Christmas = () => {
  return (
    <div id="christmasDate" className="section">
        <h2>Do Bożego Narodzenia zostało:</h2>
        <ul>
            <li>
                <span className="days big">0</span>
                <span>dni</span>
            </li>
            <li>
                <span className="hours big">0</span>
                <span>godzin</span>
            </li>
            <li>
                <span className="minutes big">0</span>
                <span>minut</span>
            </li>
            <li>
                <span className="seconds big">0</span>
                <span>minut</span>
            </li>
        </ul>
    </div>
  )
}

export default Christmas