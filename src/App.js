import React, { Component } from 'react';
import Gallery from './Gallery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './Details/Details.js';
import './App.css';
import NotExist from './NotExist.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/not-found' component={NotExist} />
            <Route exact path='/:galleryId' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
