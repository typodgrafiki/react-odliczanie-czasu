import React from 'react';
import { Vacation, Footer } from './components';
import today from './components/time/Time';
import './App.css';

const App = () => {
    
    return (
        <div className='App'>
            <Vacation 
                days="0" 
                hours="0" 
                minutes="0" 
                seconds="0" 
            />

            <Footer 
                today={today}
            />
        </div>
    )
}

export default App