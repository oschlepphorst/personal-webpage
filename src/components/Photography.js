import React, { Component } from 'react';
import athens from './../images/athens.jpg'
import capri from './../images/capri-rock.jpeg'
import chairs from './../images/chairs.jpeg'
import flower from './../images/flowah.JPG'
import mountain from './../images/mountain.jpeg'
import rhodeIsland from './../images/rhode-island.jpeg'
import rocks from './../images/rocks.jpeg'
import santorini from './../images/santorini.jpeg'
import florence from './../images/florence.jpg'


class Photography extends Component {
  render() {
    return (
        <div className="photography-page">
          {/* <p className="photography-info">Here are some favorite pictures I've taken.</p> */}

          <div class="photo-row1">
            <img className="capri-img" src={capri} alt="Capri"></img>
            <img className="athens-img" src={athens} alt="Athens"></img>
            <img className="chairs-img" src={chairs} alt="Chairs"></img>
          </div>
          <div class="photo-row2">
            <img className="florence-img" src={florence} alt="Florence"></img>
            <img className="flower-img" src={flower} alt="Flower"></img>
            <img className="mountain-img" src={mountain} alt="Mountain"></img>
            </div>
          <div class="photo-row3">
            <img className="rocks-img" src={rocks} alt="Rocks"></img>
             <img className="santorini-img" src={santorini} alt="Santorini"></img>
             <img className="rhode-island-img" src={rhodeIsland} alt="Rhode Island"></img>
          </div>
          
        </div>
    );
  }
}

export default Photography;