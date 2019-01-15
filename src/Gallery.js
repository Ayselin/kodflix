import React from 'react';
import TvShow from './TvShow';
import getGallery from './getGallery';


export default function Gallery() {
    return (
      <div>
    <div className='container'>
          {
            getGallery().map(tvShow => (
              <TvShow
                key={tvShow.id}
                id={tvShow.id} 
                name={tvShow.name} 
                logo={tvShow.logo}/>
            ))
          }  
          </div>
        </div>
    )
  }
