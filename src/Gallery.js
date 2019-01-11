import React from 'react';
import TvShow from './TvShow';
import blindspot from './images/blindspot.jpg';
import doctorwho from './images/doctorwho.jpg';
import blackandwhite from './images/chb.jpg';
import friendless from './images/friendless.jpg';
import scorpion from './images/scorpion.jpg';
import solve from './images/solve.jpg';

export default function Gallery() {
    return (
      <div>
    <div className='container'>
            <TvShow name='Blind Spot' logo={blindspot} />
            <TvShow name='Scorpion' logo={scorpion} />
            <TvShow name='Solve' logo={solve} />
          </div>
          <div className='container'>
            <TvShow name='The Friendless Five' logo={friendless} />
            <TvShow name='Doctor Who' logo={doctorwho} />
            <TvShow name='Black & White' logo={blackandwhite} />
          </div>
        </div>
    )
  }