import React, { Component } from 'react';
import blindspot from './images/blindspot.jpg';
import doctorwho from './images/doctorwho.jpg';
import chb from './images/chb.jpg';
import friendless from './images/friendless.jpg';
import scorpion from './images/scorpion.jpg';
import solve from './images/solve.jpg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
  
        <br /><br /><br />
        <div className='container'>
          <div className='titles'><img src={blindspot} alt='Favorite TV Show cover' /></div>
          <div class='overlay'> 
            <h1>Blind Spot</h1>
            </div>
          <div className='titles'><img src={scorpion} alt='Favorite TV Show cover' /></div>
          <div className='titles' ><img src={chb} alt='Favorite TV Show cover' /></div>
        </div>
        <div className='container'>
          <div className='titles'><img src={friendless} alt='Favorite TV Show cover' /></div>
          <div className='titles'><img src={doctorwho} alt='Favorite TV Show cover' /></div>
          <div className='titles'><img src={solve} alt='Favorite TV Show cover' /></div>
        </div>
      </div>


    );
  }
}

export default App;
