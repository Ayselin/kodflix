import React, { Component } from 'react';
import starborn from './astarborn.jpg'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
     <img src ={starborn} alt ='Favorite film cover' /> 
      </div>
    );
  }
}

export default App;
