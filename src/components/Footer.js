import React, { Component } from 'react';
import linkedInLogo from './../linkedin.png'
import githubLogo from './../github.svg'

class Footer extends Component {
  render() {
    return (
        <div className="footer">
            <div className="column">
                <a href="https://www.linkedin.com/in/olivia-schlepphorst">
                    <img className="linkedin-logo" src={linkedInLogo} alt="LinkedInLogo"></img>
                </a>
            </div>
            <div className="column">
                <a href="https://github.com/oschlepphorst">
                    <img className="github-logo" src={githubLogo} alt='GithubLogo'></img>
                </a>
            </div>
        </div>
    );
  }
}

export default Footer;