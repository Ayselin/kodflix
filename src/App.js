import React, { Component } from 'react';
import Tvshow from './Tvshow';
import blindspot from './images/blindspot.jpg';
import doctorwho from './images/doctorwho.jpg';
import blackandwhite from './images/chb.jpg';
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
          <Tvshow name='Blind Spot' logo={blindspot} />
          <Tvshow name='Scorpion' logo={scorpion} />
          <Tvshow name='Black and White' logo={blackandwhite} />
        </div>
        <div className='container'>
          <Tvshow name='The friendless five' logo={friendless} />
          <Tvshow name='Doctor Who' logo={doctorwho} />
          <Tvshow name='Solve' logo={solve} />
        </div>
      </div>
    );
  }
}


export default App;
