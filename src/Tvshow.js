import React from 'react';

export default function Tvshow(props) {
  return (
    <div className='titles'>
      <img src={props.logo} alt={`${props.name} logo`} />
      <div className='overlay'>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}