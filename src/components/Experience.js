import React, { Component } from 'react';
import techTogether from './../techtogether.png'
import desktopMetal from './../desktop-metal.png'
import digitalLumens from './../digital-lumens.png'
import ert from './../ert.png'
import resume from './../resume.pdf'

class Experience extends Component {
  render() {
    var link = <a href="https://techtogether.io/">here.</a>
    return (
        <div className="experience-page">

          <div className="ttb">
            <img className="tech-together-logo" 
              src={techTogether} 
              alt="TechTogetherLogo" 
              align="left">
            </img>
            <div className="ttb-info">
              <p>
                For a year and a half I was on the organizing team for TechTogether Boston, Boston's largest all female, 
                femme, and non binary hackathon. It was an incredible experience, and I was proud to be a part of this organization for the 2019 
                and 2020 events, with the mission to empower gender marginalized groups to lead successful lives in the tech industry. Learn more 
                about TechTogether's mission {link}
              </p>
            </div>
          </div>

          <div className="desktop-metal">
              <p className="dm-info">
                In 2019 I completed a six month software development co-op at Desktop Metal, a metal 3D printing system company 
                located in Burlington, MA. I helped improve the accuracy of the production printer PLC simulator using TypeScript and React, 
                and I also developed and moderated a dynamic HTML report in R of printer data and integrated with Slack, which was presented 
                to customers. In this co-op
                I followed an agile development methodology, and practiced cross team collaboration.
              </p>
            <img className="desktop-metal-logo" src={desktopMetal} alt="DesktopMetalLogo"></img>
          </div>

          <div className="digital-lumens">
            <img className="digital-lumens-logo" src={digitalLumens} alt="DigitalLumensLogo"></img>
            <p className="dl-info">In 2018 I completed a six month quality assurance engineering co-op at Digital Lumens, an intelligent lighting 
            system company. I developed test suites for various features of the intelligent lighting software in Python, and followed 
            requirements and specifications from the software team.</p>
          </div>

          <div className="ert">
            <p className="ert-info">In 2017 I completed an eight month software test engineering co-op at ERT, a data and technology company that 
            helps minimize risk in clinical trials. During this co-op I helped manage the company database using SQL, and also completed testing for the 
            clinical trial software, working with a global team of software developers.</p>
            <img className="ert-logo" src={ert} alt="ERTLogo"></img>
          </div>

        </div>
    );
  }
}

export default Experience;