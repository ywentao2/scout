import * as React from 'react'
import './App.css';
import logo from './logo.png'
import robot from './placeholder.jpg'
import placeholder_128 from './128x128placeholder.png'
import placeholder_96 from './96x96placeholder.png'
// import intake from './intake.png'
// import shooter from './shooter.png'
// import climber from './climber.png'
import climber_close from './climber_close.png'

function App() {
  // const images = [
  //   intake,
  //   shooter,
  //   climber,
  //   robot
  // ];
  function onClick(){
    return ;
  }
  return (
    <div className="App">
    <head>
      <link rel="icon" href="favicon.jpg"></link>
    </head>
    <div className="topnav">
      <img src={logo} alt="p" />
      <div className="nav-links">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#more">Learn More</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    <div className="mid_align">
      <img className="img1" src={robot} alt='robot'/>
      <div className='right_card'>
      <input type='image' src={climber_close} alt='climber button'></input>
      <input type='image' src={placeholder_96} alt='intake button'></input>
      <input type='image' src={placeholder_96} alt='shooter button'></input>
    </div>
    </div>
  </div>
  );
}

export default App;
