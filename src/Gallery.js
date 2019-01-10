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
            <TvShow name='Black and White' logo={blackandwhite} />
          </div>
          <div className='container'>
            <TvShow name='The friendless five' logo={friendless} />
            <TvShow name='Doctor Who' logo={doctorwho} />
            <TvShow name='Solve' logo={solve} />
          </div>
        </div>
    )
  }