import React, { Component } from 'react';
import homePagePortrait from './../home-page-portrait.png'

class Home extends Component {
  render() {
    return (
        <div class="home-page">
          <img class="home-portrait" src={homePagePortrait} alt="home portrait"></img>
          <div class="home-header-bio">
            <h3 class="home-header">Hi! I'm Olivia.</h3>
            <p class="home-bio">I'm currently in my fifth year at Northeastern University, pursuing a Bachelor's of 
            Science degree in Computer Science and Mathematics, and set to graduate this May 2020.</p>
            <p class="home-bio">I am a Massachusetts native, born in the small town of Groton. I currently live in Boston
            and absolutely love it. </p>
            <p class="home-bio">Besides coding, I
            enjoy photography, cooking, traveling, hanging out with friends, and being outside. Check out some of my amateur 
            photos taken on my Nikon D5300 :)</p>
          </div>
        </div>
    );
  }
}

export default Home;