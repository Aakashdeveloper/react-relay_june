import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header =() =>{
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">React</a>
                </div>
                <ul className="nav navbar-nav">
                <li activeclassName="active"><IndexLink to="/"> Home</IndexLink></li>
                <li activeclassName="active"><Link to="/about"> About</Link></li>
                <li activeclassName="active"><Link to="/course"> Course</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </nav>



    );
};

export default Header;