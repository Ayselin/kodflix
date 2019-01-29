import React from 'react';
import {Link} from 'react-router-dom';

export default function TvShow(props) {
  return (
    <Link to={`/${props.id}`} className='titles'>
      <img className='movedimg' src={props.logo} alt={`${props.name} logo`} />
      <div className='overlay'>
        <h1 className='name'>{props.name}</h1>
      </div>
    </Link>
  );
}