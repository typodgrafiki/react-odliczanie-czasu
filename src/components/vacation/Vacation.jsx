import React from 'react';
import './vacation.css';

const Vacation = () => {
  return (
    <div id="newYear" className="section">
        <h1>Do końca roku zostało:</h1>
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

export default Vacation