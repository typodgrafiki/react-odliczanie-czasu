import React from 'react';
import './vacation.css';

const Vacation = ({days, hours, minutes, seconds}) => {
    
    let currentDate = new Date();   
    const currentYear = (currentDate.getYear() + 1900);
    const nyDate = new Date(`14 Apr ${currentYear} 17:00:00`);

    function count(toDate) {

        currentDate = new Date();   
    
        const totalSeconds = ((toDate - currentDate) / 1000);    
        const seconds = Math.floor(totalSeconds % 60);
        const minutes = Math.floor((totalSeconds / 60) % 60);
        const hours = Math.floor((totalSeconds / 3600) % 24);
        const days = Math.floor((totalSeconds / 3600 / 24));
        //const months = Math.floor((totalSeconds / 3600 / 24 / 30) % 12);
        
        let daysEl = document.querySelector("#newYear .days");   
        let hoursEl = document.querySelector("#newYear .hours");    
        let minutesEl = document.querySelector("#newYear .minutes");    
        let secondsEl = document.querySelector("#newYear .seconds");    
        
        // daysEl.innerHTML = addZero(days);
        // hoursEl.innerHTML = addZero(hours);
        // minutesEl.innerHTML = addZero(minutes);
        // secondsEl.innerHTML = addZero(seconds);
        
        // console.log(days, hours, minutes, seconds);

    }

    function addZero(el) {
        return (el < 10) ? '0' + el : el;
    }
    
    // count(nyDate);
    
    setInterval(() => {
        count(nyDate);
    }, 1000);
    
    return (
        <div id="newYear" className="section">
            <h1>Do Islandii zostało:</h1>
            <ul>
                <li>
                    <span className="days big">{days}</span>
                    <span>dni</span>
                </li>
                <li>
                    <span className="hours big">{hours}</span>
                    <span>godzin</span>
                </li>
                <li>
                    <span className="minutes big">{minutes}</span>
                    <span>minut</span>
                </li>
                <li>
                    <span className="seconds big">{seconds}</span>
                    <span>sekund</span>
                </li>
            </ul>
        </div>
    )
}

export default Vacation