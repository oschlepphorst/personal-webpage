import React, { Component } from 'react';
import athens from './photos/athens.jpg'
import capri from './photos/capri-rock.jpeg'
import chairs from './photos/chairs.jpeg'
import flower from './photos/flowah.jpeg'
import mountain from './photos/mountain.jpeg'
import rhodeIsland from './photos/rhode-island.jpeg'
import rocks from './photos/rocks.jpeg'
import santorini from './photos/santorini.jpeg'
import florence from './photos/florence.jpg'
import vienna from './photos/vienna.jpeg'
import paris from './photos/montmarte.jpeg'
import boston from './photos/boston.jpeg'
import './Photography.css'


class Photography extends Component {
  render() {
    return (
        <div className="photography-page">

            <div className="img-container">
              <div class="content">
                <div class="content-overlay"></div>
                <img className="capri-img" src={capri} alt="Capri"></img>
                <div className="content-details fade-in-bottom">
                  <h3 className="img-text">Capri, Italy</h3>
                </div>
              </div>
            </div>

            <div className="img-container">
              <div className="content">
                <div className="content-overlay"></div>
                <img className="paris-img" src={paris} alt="Paris"></img>
                <div className="content-details fade-in-bottom">
                  <h3 className="img-text">Paris, France</h3>
                </div>
              </div>
            </div>

            <div className="img-container">
              <div className="content">
                <div className="content-overlay"></div>
                <img className="chairs-img" src={chairs} alt="Colorado"></img>
                <div className="content-details fade-in-bottom">
                  <h3 className="img-text">Colorado</h3>
                </div>
              </div>
            </div>

            <div className="img-container">
              <div className="content">
                <div className="content-overlay"></div>
                <img className="florence-img" src={florence} alt="Florence"></img>
                <div className="content-details fade-in-bottom">
                  <h3 className="img-text">Florence, Italy</h3>
                </div>
              </div>
            </div>

            <div className="img-container">
              <div className="content">
                <div className="content-overlay"></div>
                <img className="flower-img" src={flower} alt="Flower"></img>
                <div className="content-details fade-in-bottom">
                  <h3 className="img-text">Boston</h3>
                </div>
              </div>
            </div>

            <div className="img-container">
              <div className="content">
                <div className="content-overlay"></div>
                <img className="mountain-img" src={mountain} alt="Mountain"></img>
                <div className="content-details fade-in-bottom">
                  <h3 className="img-text">New Hampshire</h3>
                </div>
              </div>
            </div>

            <div className="img-container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img className="rocks-img" src={rocks} alt="Rocks"></img>
                  <div className="content-details fade-in-bottom">
                    <h3 className="img-text">San Francisco</h3>
                  </div>
                </div>
              </div>

            <div className="img-container">
              <div className="content">
                <div className="content-overlay"></div>
                <img className="santorini-img" src={santorini} alt="Santorini"></img>
                <div className="content-details fade-in-bottom">
                  <h3 className="img-text">Santorini, Greece</h3>
                </div>
              </div>
            </div>  

            <div className="img-container">
              <div className="content">
                <div className="content-overlay"></div>
                <img className="rhode-island-img" src={rhodeIsland} alt="Rhode Island"></img>
                <div className="content-details fade-in-bottom">
                  <h3 className="img-text">Rhode Island</h3>
                </div>
              </div>
            </div>

            <div className="img-container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img className="athens-img" src={athens} alt="Athens"></img>
                  <div className="content-details fade-in-bottom">
                    <h3 className="img-text">Athens, Greece</h3>
                  </div>
                </div>
              </div>

            <div className="img-container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img className="vienna-img" src={vienna} alt="Vienna"></img>
                  <div className="content-details fade-in-bottom">
                    <h3 className="img-text">Vienna, Austria</h3>
                  </div>
                </div>
            </div>

            <div className="img-container">
                <div className="content">
                  <div className="content-overlay"></div>
                  <img className="boston-img" src={boston} alt="Boston"></img>
                  <div className="content-details fade-in-bottom">
                    <h3 className="img-text">Boston</h3>
                  </div>
                </div>
            </div>
          
        </div>
    );
  }
}

export default Photography;