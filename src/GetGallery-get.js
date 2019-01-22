import blindspot from './images/blindspot.jpg';
import doctorwho from './images/doctorwho.jpg';
import blackandwhite from './images/chb.jpg';
import friendless from './images/friendless.jpg';
import scorpion from './images/scorpion.jpg';
import solve from './images/solve.jpg';

  export default function getGallery() {
    return [
      { id: 'blind', name:'Blind Spot', logo: blindspot },
      { id: 'scorpion', name: 'Scorpion', logo: scorpion },
      { id: 'solve', name:'Solve', logo: solve },
      { id: 'friendless', name:'The Friendless Five', logo: friendless },
      { id: 'doctorwho', name: 'Doctor Who', logo: doctorwho },
      { id: 'blackandwhite', name:'Black & White', logo: blackandwhite }
    ];   
  }