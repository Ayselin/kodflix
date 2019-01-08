import React, { Component } from 'react';
import starborn from './images/astarborn.jpg'
import bodyguard from './images/bodyguard.jpg';
import doctorwho from './images/doctorwho.jpg';
import onedayatatime from './images/onedayatatime.jpg';
import thegoodfight from './images/thegoodfight.jpg';
import thiscountry from './images/thiscountry.jpg';
import trust from './images/trust.jpg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={starborn} alt='Favorite film cover' />
        <br /><br /><br />
        <div className='container'>
          <div className='titles'><img src={bodyguard} alt='Favorite TV Show cover' /></div>
          <div className='titles'><img src={doctorwho} alt='Favorite TV Show cover' /></div>
          <div className='titles' ><img src={onedayatatime} alt='Favorite TV Show cover' /></div>
        </div>
        <div className='container'>
          <div className='titles'><img src={thegoodfight} alt='Favorite TV Show cover' /></div>
          <div className='titles'><img src={thiscountry} alt='Favorite TV Show cover' /></div>
          <div className='titles'><img src={trust} alt='Favorite TV Show cover' /></div>
        </div>
      </div>


    );
  }
}

export default App;
