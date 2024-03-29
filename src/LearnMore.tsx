import React from 'react';
import {Link} from "react-router-dom";
import logo from './logo.png';

function learnMore() {
    return (
        <div className="App">
            <head>
                <link rel="icon" href="favicon.jpg"></link>
            </head>
            <div className="topnav">
                <img src={logo} alt="p" />
            <div className="nav-links">
                <a><Link to="/">Home</Link></a>
                <a className='active'><Link to="/learnMore">Learn More</Link></a>
                <a><Link to="/contact">Contact</Link></a>
            </div>
            </div>
        </div>
    );
};

export default learnMore;