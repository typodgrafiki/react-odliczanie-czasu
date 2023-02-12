import React from 'react';
import { Christmas, Vacation, Footer } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <Vacation />
        <Christmas />
        <Footer />
    </div>
  )
}

export default App