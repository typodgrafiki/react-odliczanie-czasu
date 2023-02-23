import React from 'react';
import { Vacation, Footer } from './components';
import today from './components/time/Time';
import './App.css';


let currentDate = new Date();   
const currentYear = (currentDate.getYear() + 1900);
const nyDate = new Date(`14 Apr ${currentYear} 17:00:00`);

const updateTime = (thisBind) => {
        
    currentDate = new Date();   
    const totalSeconds = ((nyDate - currentDate) / 1000);    
    const toSeconds = Math.floor(totalSeconds % 60);
    const toMinutes = Math.floor((totalSeconds / 60) % 60);
    const toHours = Math.floor((totalSeconds / 3600) % 24);
    const toDays = Math.floor((totalSeconds / 3600 / 24));
    //const months = Math.floor((totalSeconds / 3600 / 24 / 30) % 12);   
    
    thisBind.setState({
        days: addZero(toDays),
        hours: addZero(toHours),
        minutes: addZero(toMinutes),
        seconds: addZero(toSeconds)
    })    
    
    setTimeout(() => {
        updateTime(thisBind);
    }, 1000);
    
}

function addZero(el) {
    return (el < 10) ? '0' + el : el;
}

class App extends React.Component {
    
    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }
    
    componentDidMount() {
        updateTime(this);
    }
    
    render() {
        return (
            <div className='App'>
                <Vacation timeTo={this.state} />
                <Footer today={today} />
            </div>
        )
    }    
}

export default App