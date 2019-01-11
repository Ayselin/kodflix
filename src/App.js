import React, { Component } from 'react';
import Gallery from './Gallery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './Details.js';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Gallery} />
          <Route exact path='/details' component={Details} />  
          </div>
      </Router>
    );
  }
}




export default App;
