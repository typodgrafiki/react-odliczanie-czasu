import React from 'react';
import './vacation.css';

const Vacation = ({ timeTo }) => {
    return (
        <div id="newYear" className="section">
            <div>
                <h1>Iceland</h1>
                <h2>Do tripa pozostało:</h2>
            </div>
            <ul>
                <li>
                    <span className="days big">{timeTo.days}</span>
                    <span>dni</span>
                </li>
                <li>
                    <span className="hours big">{timeTo.hours}</span>
                    <span>godzin</span>
                </li>
                <li>
                    <span className="minutes big">{timeTo.minutes}</span>
                    <span>minut</span>
                </li>
                <li>
                    <span className="seconds big">{timeTo.seconds}</span>
                    <span>sekund</span>
                </li>
            </ul>
        </div>
    )
}


export default Vacation