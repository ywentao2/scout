import * as React from "react";
import "./App.css";
import LearnMore from "./LearnMore";
import Contact from "./contact";
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
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function HomePage() {
  const reader = new FileReader();
  const roboTitle = [
    "The 2024 Robot: Lyra",
    "The Climber",
    "The Intake",
    "The Shooter",
  ];
  const roboText = [
    "poppppoppppoppppoppppoppppoppppoppppoppppoppppoppppoppppoppppoppppoppppoppppoppppoppppoppp",
    "eat",
    "poop",
    "cry",
  ];
  const [robotImage, setRobotImage] = React.useState(robot);
  const [robotText, setRobotText] = React.useState(roboText[0]);
  const [robotTitle, setRobotTitle] = React.useState(roboTitle[0]);
  const [buttonPressed, setButtonPressed] = React.useState("");
  const handleOnClick = (
    image: string,
    title: string,
    text: string,
    button: string
  ): void => {
    setRobotImage(image);
    setRobotTitle(title);
    setRobotText(text);
    setButtonPressed(button);
  };

  return (
    <div className="App">
      <head>
        <link rel="icon" href="favicon.jpg"></link>
      </head>
      <div className="topnav">
        <img src={logo} alt="p" />
        <div className="nav-links">
          <a className="active">
            <Link to="">Home</Link>
          </a>
          {/* <a><Link to="/learnMore">Learn More</Link></a> */}
          {/* <a><Link to="/contact">Contact</Link></a> */}
        </div>
      </div>
      <div className="mid_align">
        <img className="img1" src={robotImage} alt="robot" />
        <div className="right_card">
          <div className="inputs">
            <input
              type="image"
              src={climber_close}
              alt="The Climber"
              onClick={() => {
                // setRobotImage(climber);
                // setRobotTitle(roboTitle[1]);
                // setRobotText(roboText[1]);
                handleOnClick(climber, roboTitle[1], roboText[1], "climber");
              }}
            />

            <input
              type="image"
              src={intake_close}
              alt="The Intake"
              onClick={() => {
                // setRobotImage(intake);
                // setRobotTitle(roboTitle[2]);
                // setRobotText(roboText[2]);
                handleOnClick(intake, roboTitle[2], roboText[2], "intake");
              }}
            />
            <input
              type="image"
              src={shooter_close}
              alt="The Shooter"
              onClick={() => {
                // setRobotImage(shooter);
                // setRobotTitle(roboTitle[3]);
                // setRobotText(roboText[3]);
                handleOnClick(shooter, roboTitle[3], roboText[3], "shooter");
              }}
            />
          </div>
          {buttonPressed === "climber" && (
            <>
              <div className="title">
                <h1>{roboTitle[1]}</h1>
              </div>
              <div className="bodyText">
                <p>{roboText[1]}</p>
              </div>
            </>
          )}
          {buttonPressed === "intake" && (
            <>
              <div className="title">
                <h1>{roboTitle[2]}</h1>
              </div>
              <div className="bodyText">
                <p>{roboText[2]}</p>
              </div>
            </>
          )}
          {buttonPressed === "shooter" && (
            <>
              <div className="title">
                <h1>{roboTitle[3]}</h1>
              </div>
              <div className="bodyText">
                <p>{roboText[3]}</p>
              </div>
            </>
          )}
          {buttonPressed === "back" && (
            <>
              <div className="title">
                <h1>{roboTitle[0]}</h1>
              </div>
              <div className="bodyText">
                <p>{roboText[0]}</p>
              </div>
            </>
          )}
          {buttonPressed === "" && (
            <>
              <div className="title">
                <h1>{roboTitle[0]}</h1>
              </div>
              <div className="bodyText">
                <p>{roboText[0]}</p>
              </div>
            </>
          )}
          {/* <div className="title">
            <h1>{robotTitle}</h1>
          </div>
          <div className="bodyText">
            <p>{robotText}</p>
          </div> */}
          <input
            className="back"
            type="image"
            src={logo}
            alt="back button"
            onClick={() => {
              // setRobotImage(robot);
              // setRobotTitle(roboTitle[0]);
              // setRobotText(roboText[0]);
              handleOnClick(robot, roboTitle[0], roboText[0], "back");
            }}
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/learnMore" element={<LearnMore />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
