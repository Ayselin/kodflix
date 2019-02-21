import React from 'react';
import {Link} from 'react-router-dom';

export default function TvShow(props) {
  return (
    <Link to={`/${props.id}`} className='titles'>
      <img src={require(`./images/${props.id}.jpg`)} alt='' />
      <div className='overlay'>
        <h1 className='name'>{props.name}</h1>
      </div>
    </Link>
  );
}