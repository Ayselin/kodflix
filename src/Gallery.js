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
            <TvShow id='blind' name='Blind Spot' logo={blindspot} />
            <TvShow id='scorpion' name='Scorpion' logo={scorpion} />
            <TvShow id='solve' name='Solve' logo={solve} />
            <TvShow id='friendless' name='The Friendless Five' logo={friendless} />
            <TvShow id='doctorwho' name='Doctor Who' logo={doctorwho} />
            <TvShow id='blackandwhite' name='Black & White' logo={blackandwhite} />
            </div>
        </div>
    )
  }