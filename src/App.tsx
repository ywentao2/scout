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
    "test0",
    "test1",
    "test2",
    "test3"
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

  // function bodyText(){
  //   return (
  //     <div className="bodyText">
  //             <h1>General</h1>
  //               <p>Our beautiful beast, Lyra, weighs at 124.27 lbs</p>
  //               <ul>
  //                 <li>WCP Swerve X driven by gears</li>
  //                 <li>24 x 24 Drivetrain between swerves, with 6 inches of intake in front of the swerves</li>
  //                 <li>Overall a 30 x 24 chassis</li>
  //               </ul>
  //               <h1>Autonomous</h1>
  //               <p>
  //                 Lyra's auto features include creating Autonomous Paths for compatibility with various robots, using Limelight for odometry tuning, Pathplanner for path simulation, and April tags for orientation. It can intake notes from different positions and follows a path for intaking and shooting.
  //               </p>
  //               <h1>TeleOp</h1>
  //               <p>
  //                 Lyra is capable of shooting into the speaker, amp, and hypothetically the trap, but as we’ve been developing our robot we decided to prioritize shooting on the speaker and the amp. Our intake hands off the note to the shooter, maximizing our efficiency to approximately 15 seconds between each scoring period into the speaker. 
  //               </p>
  //             </div>
  //   );
  // }

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
            {/* <input
              type="image"
              src={climber_close}
              alt="The Climber"
              onClick={() => {
                // setRobotImage(climber);
                // setRobotTitle(roboTitle[1]);
                // setRobotText(roboText[1]);
                handleOnClick(climber, roboTitle[1], "climber");
              }}
            /> */}

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
                <p className="climberText">Lyra's climber employs multiple old and new concepts to make a world-class climber, featuring: </p>
                <ul>
                  <li className="climberText">A telescoping system with a series of bars (3+) that are inset within one another and connected by a series of strings that force the bars in but can loosen to allow force springs to extend the smaller internal bars</li>
                  <li className="climberText">A 2-bar arm utilizing one static bar with a mounted chain and a second moving bar guided along by a bearing "nest" to keep the bar in place. Ultimately, we decided on this due to its capability to be compact while also being far easier to repair than other options.</li>
                  <li className="climberText">A "measuring tape" containing a spool at the bottom of the mechanism which releases a semi-rigid body with a hook at the end and can collapse back into itself to lift the robot</li>
                </ul>
              </div>
            </>
          )}
          {buttonPressed === "intake" && (
            <>
              <div className="title">
                <h1>{roboTitle[2]}</h1>
              </div>
              <div className="bodyText">
                <p className="intakeText">Lyra has an under-the-bumper intake that goes between our swerve modules. Our design has changed quite a bit throughout the season, with the newest additions being free-spinning PVC pipes inspired by 7072 (OGRE) and polycarbonate shields to protect the pathway of the note. A total of 5 rollers help guide the note exactly where it needs to be for the handoff to the shooter, making use of the note’s compression and fluidity to intake at such an ambitious angle.</p>
              </div>
            </>
          )}
          {buttonPressed === "shooter" && (
            <>
              <div className="title">
                <h1>{roboTitle[3]}</h1>
              </div>
              <div className="bodyText">
                <p className="shooterText">The shooter was inspired by the FTC game <em>"Ultimate Goal"</em> with its use of rings as game pieces. Then, inspiration was taken from various international teams such as 3255, 7047, and 6328. The shooter then underwent many rounds of testing for the best design before being manufactured. The shooter now features:</p>
                <ul>
                  <li className="shooterText">Two sides that are each driven by a Kraken motor</li>
                  <li className="shooterText">4” diameter Stealth and Colson wheels</li>
                  <li className="shooterText">Belt indexer driven by Falcon 500 motors</li>
                </ul>
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
                <p>Our beautiful beast, Lyra, weighs at 108 lbs</p>
                <ul>
                  <li>WCP Swerve X driven by gears</li>
                  <li>24 x 24 Drivetrain between swerves, with 6 inches of intake in front of the swerves</li>
                  <li>Overall a 30 x 24 chassis</li>
                  <li>Agile and employs a hockey-stop algorithm for effective breaking</li>
                </ul>
                <h1>Autonomous</h1>
                <p>
                  Lyra's auto features include creating Autonomous Paths for compatibility with various robots, using Limelight for odometry tuning, Pathplanner for path simulation, and April tags for orientation. It can intake notes from different positions and follows a path for intaking and shooting.
                </p>
                <h1>TeleOp</h1>
                <p>
                  Lyra is capable of shooting into the speaker and amp, but as we’ve been developing our robot we decided to prioritize shooting on the speaker and the amp. Our intake hands off the note to the shooter, maximizing our efficiency to approximately 15 seconds between each scoring period into the speaker. 
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
                <p>Our beautiful beast, Lyra, weighs at 108 lbs</p>
                <ul>
                  <li>WCP Swerve X driven by gears</li>
                  <li>24 x 24 Drivetrain between swerves, with 6 inches of intake in front of the swerves</li>
                  <li>Overall a 30 x 24 chassis</li>
                  <li>Agile and employs a hockey-stop algorithm for effective breaking</li>
                </ul>
                <h1>Autonomous</h1>
                <p>
                  Lyra's auto features include creating Autonomous Paths for compatibility with various robots, using Limelight for odometry tuning, Pathplanner for path simulation, and April tags for orientation. It can intake notes from different positions and follows a path for intaking and shooting.
                </p>
                <h1>TeleOp</h1>
                <p>
                  Lyra is capable of shooting into the speaker and amp, but as we’ve been developing our robot we decided to prioritize shooting on the speaker and the amp. Our intake hands off the note to the shooter, maximizing our efficiency to approximately 15 seconds between each scoring period into the speaker. 
                </p>
              </div>
            </>
          )}
          <input
            className="back"
            type="image"
            alt="back button"
            src={logo}
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
