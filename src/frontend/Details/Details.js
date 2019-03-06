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
      .then(galleries => {
        let galleryId = this.props.match.params.galleryId;
        let gallery = galleries.find(show => show.id === galleryId);
        this.setState({
           gallery:gallery
        });
      });
  };

  render() {
    let gallery = this.state.gallery;
    if (this.state.gallery === undefined) {
      return <Redirect to='/not-found' />;
    } else if(this.state.gallery.id){
      return (
        <div className='Details'>
          <h1>{gallery.name}</h1>
          <div className='content'>
            <div className='text'>
              {gallery.details}
            </div>
            <div className='imageContainer'>
              <img
                src={require(`../images/${gallery.id}.jpg`)}
                alt={this.state.gallery.name} />
            </div>
          </div>
          <Link className='link' to='/' >Back to home page</Link>
        </div>
      );
    } else {
      return (
        <div className='details'>
        <div className='content'>Loadind...</div>
        </div>
      );
    }
  }
}
