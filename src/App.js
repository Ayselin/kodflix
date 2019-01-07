import React, { Component } from 'react';
import starborn from './astarborn.jpg'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
     <img src ={starborn} alt ='Favorite film cover' /> 
     <br/><br/><br/>
     <div>The Good Fight</div>
     <div>One Day at a Time</div>
     <div>Bodyguard</div>
     <div>This Country</div>
     <div>Doctor Who</div>
     <div>Trust</div>
      </div>

    );
  }
}

export default App;
