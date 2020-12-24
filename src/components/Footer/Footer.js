import React, { Component } from 'react';
import linkedInLogo from './../../linkedin.png';
import resume from './../../resume.pdf';
import './Footer.css';

class Footer extends Component {
  render() {
    var resumeLink = <a className="resume-link" href={resume} >resume</a>
    var code = <a className="code-link" href="https://github.com/oschlepphorst/personal-webpage">code</a> 
    var backlog = <a className="backlog-link" href="https://trello.com/b/bOAavcUO/personal-webpage-to-do">backlog</a>
    return (
        <div className="footer">
            <div className="column">
                <a href="https://www.linkedin.com/in/olivia-schlepphorst">
                    <img className="linkedin-logo" src={linkedInLogo} alt="LinkedInLogo"></img>
                </a>
            </div>
            {/* <div className="column">
                <a href="https://github.com/oschlepphorst">
                    <img className="github-logo" src={githubLogo} alt='GithubLogo'></img>
                </a>
            </div> */}
            <div className="resume">Here's a PDF version of my {resumeLink}.</div>
            <div className="website-code">Check out the {code} for this website on my GitHub.</div>
            <div className="disclaimer">
                This is a site in progress! Here is my {backlog}.
            </div>
        </div>
    );
  }
}

export default Footer;