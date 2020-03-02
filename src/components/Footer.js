import React, { Component } from 'react';
import linkedInLogo from './../linkedin.png'

class Footer extends Component {
  render() {
    return (
        <div className="footer">
            <h4 className="footer-text">Connect with me!</h4>
            <img class="linkedin-logo" src={linkedInLogo} alt="LinkedInLogo"></img>
        </div>
    );
  }
}

export default Footer;