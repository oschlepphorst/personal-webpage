import React, { Component } from 'react';
import homePagePortrait from './../home-page-portrait.png'

class Home extends Component {
  render() {
    return (
        <div class="home-page">
          <img class="home-portrait" src={homePagePortrait} alt="home portrait"></img>
          <div class="home-header-bio">
            <h3 class="home-header">Hi! I'm Olivia.</h3>
            <p class="home-bio">I'm currently in my fifth year at Northeastern University, pursuing a Bachelor's of Science degree in Computer Science and Mathematics.</p>
          </div>
        </div>
    );
  }
}

export default Home;