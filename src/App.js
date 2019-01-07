import React, { Component } from 'react';
import starborn from './astarborn.jpg'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={starborn} alt='Favorite film cover' />
        <br /><br /><br />
        <div className='container'>
          <div className='titles'>The Good Fight</div>
          <div className='titles'>One Day at a Time</div>
          <div className='titles' >Bodyguard</div>
        </div>
        <div className='container'>
          <div className='titles'>This Country</div>
          <div className='titles'>Doctor Who</div>
          <div className='titles'>Trust</div>
        </div>
      </div>


    );
  }
}

export default App;
