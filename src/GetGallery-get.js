import blindspot from './images/blindspot.jpg';
import cabinstay from './images/cabinstay.jpg';
import skyfall from './images/skyfall.jpg';
import deadpool from './images/deadpool.jpg';
import scorpion from './images/scorpion.jpg';
import scarface from './images/scarface.jpg';

  export default function getGallery() {
    return [
      { id: 'blind', name:'BLIND SPOT', logo: blindspot, details:'Blindspot focuses on a mysterious tattooed woman who is found naked inside a travel bag in Times Square by the FBI, with no recollection of her own past or identity. They discover that her tattoos contain clues to crimes they will have to solve.' },
      { id: 'scorpion', name: 'SCORPION', logo: scorpion, details:'Scorpion is said to be the last line of defense against complex, high-tech threats around the globe. Drawing on a diverse set of skills and experience such as coding, psychology, and engineering, they are able to solve these situations. The team tackles a variety of problems, many of which are extremely complicated. While they are frequently called into service by the Department of Homeland Security, they also accept work from private individuals and organizations.' },
      { id: 'skarface', name:'SCARFACE', logo: scarface, details:'The series features career-defining cases of police officers and FBI agents, with a heavy emphasis on forensic evidence. In each episode, a mysterious homicide case unfolds through first person accounts from Americas\' elite law enforcement officers.' },
      { id: 'deadpool', name:'DEAD POOL', logo: deadpool, details:'An excitable history teacher joins forces with her skeptical teenage sister and her friends to solve a longtime family mystery. They must race to track down a lost treasure before it falls into the wrong hands.'},
      { id: 'cabinstay', name: 'CABIN STAY', logo: cabinstay, details:'The show is a significant part of British popular culture, and elsewhere it has gained a cult following. It has influenced generations of British television professionals, many of whom grew up watching the series. The programme originally ran from 1963 to 1989. There was an unsuccessful attempt to revive regular production in 1996 with a backdoor pilot, in the form of a television film titled Doctor Who.'},
      { id: 'skyfall', name:'SKYFALL', logo: skyfall, details:''}
    ];   
  }