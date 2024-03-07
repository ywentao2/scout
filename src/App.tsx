import * as React from "react";
import "./App.css";
import logo from "./logo.png";
import robot from "./placeholder.jpg";
import placeholder_128 from "./128x128placeholder.png";
import placeholder_96 from "./96x96placeholder.png";
import intake from "./intake.png";
import shooter from "./shooter.png";
import climber from "./climber.png";
import climber_close from "./climber_close.png";

function App() {
  const [robotImage, setRobotImage] = React.useState(robot);
  const [robotText, setRobotText] = React.useState("Robot");
  const text = {
    
  };
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
        <img className="img1" src={robotImage} alt="robot" />
        <div className="right_card">
          <input
            type="image"
            src={climber_close}
            alt="climber button"
            onClick={() => {
              setRobotImage(climber);

            }}
          ></input>
          <input
            type="image"
            src={placeholder_96}
            alt="intake button"
            onClick={() => {
              setRobotImage(intake);
            }}
          ></input>
          <input
            type="image"
            src={placeholder_96}
            alt="shooter button"
            onClick={() => {
              setRobotImage(shooter);
            }}
          ></input>
          <div>
            <h1>{robotText}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
