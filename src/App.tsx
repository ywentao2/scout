import * as React from "react";
import "./App.css";
import LearnMore from "./LearnMore";
import logo from "./logo.png";
import robot from "./robot.jpeg";
import placeholder_128 from "./128x128placeholder.png";
import placeholder_96 from "./96x96placeholder.png";
import intake from "./intake.jpeg";
import shooter from "./shooter.png";
import climber from "./climber.jpeg";
import climber_close from "./climber_close.png";
import intake_close from "./intake_close.png";
import shooter_close from "./shooter_close.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom";

function App() {
  const reader = new FileReader();
  const roboTitle = ["popping", "eating", "pooping", "crying"];
  const roboText = ["pop", "eat", "poop", "cry"];
  const [robotImage, setRobotImage] = React.useState(robot);
  const [robotText, setRobotText] = React.useState(roboTitle[0]);
  const [robotTitle, setRobotTitle] = React.useState(roboText[0]);

  return (
    <Router>
      <Routes>
        <Route path="/learnMore" element={<LearnMore />} />
      </Routes>
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
            <Link to="/learnMore">
              <a href="#more">Learn More</a>
            </Link>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="mid_align">
          <img className="img1" src={robotImage} alt="robot" />
          <div className="right_card">
            <div className="inputs">
              <input
                type="image"
                src={climber_close}
                alt="climber button"
                onClick={() => {
                  setRobotImage(climber);
                  setRobotTitle(roboTitle[1]);
                  setRobotText(roboText[1]);
                }}
              />
              <input
                type="image"
                src={intake_close}
                alt="intake button"
                onClick={() => {
                  setRobotImage(intake);
                  setRobotTitle(roboTitle[2]);
                  setRobotText(roboText[2]);
                }}
              />
              <input
                type="image"
                src={shooter_close}
                alt="shooter button"
                onClick={() => {
                  setRobotImage(shooter);
                  setRobotTitle(roboTitle[3]);
                  setRobotText(roboText[3]);
                }}
              />
            </div>
            <div className="text">
              <h1>{robotTitle}</h1>
              <p>{robotText}</p>
            </div>
            <input
              className="back"
              type="image"
              src={logo}
              alt="back button"
              onClick={() => {
                setRobotImage(robot);
                setRobotTitle(roboTitle[0]);
                setRobotText(roboText[0]);
              }}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
