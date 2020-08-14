import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import meAtTTB from './../images/ttb-me.png'
import Button from '@material-ui/core/Button';

class Home extends Component {
  render() {
    return (
        <div className="home-page">
          <div className="container">
            <div className="text-overlay">
              Hi! I'm Olivia.
            </div>
            <div className="under-text-overlay">
              ~Student and software developer~
            </div>
          </div>

          <div className="home-header-bio">
            <h3 className="about-header">
              About Me
            </h3>
            <p className="home-bio">
            I'm currently in my fifth year at Northeastern University, pursuing a Bachelor's of 
            Science degree in Computer Science and Mathematics, and set to graduate this May 2020. I am a Massachusetts 
            native, born in the small town of Groton. I currently live in Boston and absolutely love it. Besides coding, 
            I enjoy photography, cooking, traveling, hanging out with friends, and being outside. Enjoy my webpage!
            </p>
          </div>

          <div className="experience-section">
            <p className="home-exp-info">Check out some highlights from my resume.
            <Link className="exp-button" to="/experience">
              <Button variant="outlined" renderAs="button">
                EXPERIENCE
              </Button>
            </Link>
            </p>
            <img className="ttb-me" src={meAtTTB} alt="Me at TTB"></img>   
          </div>

          <div className="photo-section">
            <h3 className="photo-section-header">
              I love to take photos! Check out some of my favorites.
              <Link className="photo-button" to="/photography">
              <Button className="photo-button" variant="outlined" renderAs="button">
                PHOTOS
              </Button>
              </Link>
            </h3>
          </div>
        </div>
    );
  }
}

export default Home;