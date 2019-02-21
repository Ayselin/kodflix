import React from 'react';
import { Link, Redirect } from 'react-router-dom';
//import getGallery from '../GetGallery-get';
import './Details.css';


export default class Details extends React.Component {

  constructor() {
    super();
    this.state = {
      gallery: {}
    };
  }

  componentDidMount() {

    fetch('/rest/shows')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });

  };

  render() {
    if (this.state.gallery === undefined) {
      return <Redirect to='/not-found' />;
    } else {
      return (
        <div className='Details'>
          <h1>{this.state.gallery.name}</h1>
          <div className='content'>
            <div className='text'>
              {this.state.gallery.details}
            </div>
            <div className='imageContainer'>
              <img
                className='image'
                src={this.state.gallery.logo}
                alt={this.state.gallery.name} />
            </div>
          </div>
          <Link className='link' to='/' >Back to home page</Link>
        </div>

      );
    }
  }
}
