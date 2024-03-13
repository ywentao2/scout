import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="App">
            <head>
                <link rel="icon" href="favicon.jpg"></link>
            </head>
            <div className="topnav">
            <img src={logo} alt="p" />
            <div className="nav-links">
                <a><Link to="/">Home</Link></a>
                {/* <a><Link to="/learnMore">Learn More</Link></a> */}
                <a className='active'><Link to="/contact">Contact</Link></a>
            </div>
            </div>
        </div>
    );
};

export default Contact;