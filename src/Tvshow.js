import React from 'react';
import {Link} from 'react-router-dom';

export default function TvShow(props) {
  return (
    <Link to='/details' className='titles'>
      <img src={props.logo} alt={`${props.name} logo`} />
      <div className='overlay'>
        <h1>{props.name}</h1>
      </div>
      </Link>
  );
}