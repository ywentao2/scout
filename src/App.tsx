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
  const [robotTitle, setRobotTitle] = React.useState(roboTitle[0]);
  const [buttonPressed, setButtonPressed] = React.useState("");
  const handleOnClick = (
    image: string,
    title: string,
    button: string
  ): void => {
    setRobotImage(image);
    setRobotTitle(title);
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
                handleOnClick(climber, roboTitle[1], "climber");
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
                handleOnClick(intake, roboTitle[2], "intake");
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
                handleOnClick(shooter, roboTitle[3], "shooter");
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
                <p></p>
              </div>
            </>
          )}
          {buttonPressed === "back" && (
            <>
              <div className="title">
                <h1>{roboTitle[0]}</h1>
              </div>
              <div className="bodyText">
              <h1>General</h1>
                <p>Our beautiful beast, Lyra, weighs at 124.27 lbs</p>
                <ul>
                  <li>WCP Swerve X driven by gears</li>
                  <li>24 x 24 Drivetrain between swerves, with 6 inches of intake in front of the swerves</li>
                  <li>Overall a 30 x 24 chassis</li>
                </ul>
                <h1>Autonomous</h1>
                <p>
                  Lyra's auto features include creating Autonomous Paths for compatibility with various robots, using Limelight for odometry tuning, Pathplanner for path simulation, and April tags for orientation. It can intake notes from different positions and follows a path for intaking and shooting.
                </p>
                <h1>TeleOp</h1>
                <p>
                  Lyra is capable of shooting into the speaker, amp, and hypothetically the trap, but as we’ve been developing our robot we decided to prioritize shooting on the speaker and the amp. Our intake hands off the note to the shooter, maximizing our efficiency to approximately 15 seconds between each scoring period into the speaker. 
                </p>
              </div>
            </>
          )}
          {buttonPressed === "" && (
            <>
              <div className="title">
                <h1>{roboTitle[0]}</h1>
              </div>
              <div className="bodyText">
                <h1>General</h1>
                <p>Our beautiful beast, Lyra, weighs at 124.27 lbs</p>
                <ul>
                  <li>WCP Swerve X driven by gears</li>
                  <li>24 x 24 Drivetrain between swerves, with 6 inches of intake in front of the swerves</li>
                  <li>Overall a 30 x 24 chassis</li>
                </ul>
                <h1>Autonomous</h1>
                <p>
                  Lyra's auto features include creating Autonomous Paths for compatibility with various robots, using Limelight for odometry tuning, Pathplanner for path simulation, and April tags for orientation. It can intake notes from different positions and follows a path for intaking and shooting.
                </p>
                <h1>TeleOp</h1>
                <p>
                  Lyra is capable of shooting into the speaker, amp, and hypothetically the trap, but as we’ve been developing our robot we decided to prioritize shooting on the speaker and the amp. Our intake hands off the note to the shooter, maximizing our efficiency to approximately 15 seconds between each scoring period into the speaker. 
                </p>
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
              handleOnClick(robot, roboTitle[0], "back");
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
