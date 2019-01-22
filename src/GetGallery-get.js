import blindspot from './images/blindspot.jpg';
import cabinstay from './images/cabinstay.jpg';
import skyfall from './images/skyfall.jpg';
import deadpool from './images/deadpool.jpg';
import scorpion from './images/scorpion.jpg';
import scarface from './images/scarface.jpg';

  export default function getGallery() {
    return [
      { id: 'blind', name:'BLIND SPOT', logo: blindspot, details:'Blindspot focuses on a mysterious tattooed woman who is found naked inside a travel bag in Times Square by the FBI, with no recollection of her own past or identity. They discover that her tattoos contain clues to crimes they will have to solve.' },
      { id: 'scorpion', name: 'SCORPION', logo: scorpion, details:'' },
      { id: 'skarface', name:'SCARFACE', logo: scarface, details:'' },
      { id: 'deadpool', name:'DEAD POOL', logo: deadpool, details:''},
      { id: 'cabinstay', name: 'CABIN STAY', logo: cabinstay, details:''},
      { id: 'skyfall', name:'SKYFALL', logo: skyfall, details:''}
    ];   
  }