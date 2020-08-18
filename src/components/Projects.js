import React, { Component } from 'react';
import techTogether from './../techtogether.png';
import dsProject from './../ds-project.png';
import graphicsVid from './../cs-project-video.mp4';

class Projects extends Component {

    render() {
        return (
            <div className="project-page">
                <div className="cancer-project">
                    <img className="cancer-project-pic" 
                        src={dsProject} 
                        alt="DataScienceProject" 
                        align="left">
                    </img>
                    <div className="cancer-project-info">
                        <p className="project-header">Breast Cancer Treatability/Mortality By State</p>
                        <p className="technologies">Technologies Used: Python, Pandas, SciKit Learn, Beautiful Soup, Plotly, Seaborn</p>
                        <p className="project-description">Data science project for DS2000. Predicted breast cancer mortality rate for select 
                        states in the U.S. based on a variety of factors using a trained dataset containing 80% of U.S. states. Scraped data,
                        performed data wrangling, and trained and optimized a machine learning model (compared Ridge, Lasso, K-Nearest Neighbors, 
                        and Support Vector Machine algorithms). </p>
                    </div>
                </div>
                <div className="graphics-project">
                    <video className="graphics-vid" controls autoplay loop muted>
                        <source src={graphicsVid} type='video/mp4'/>
                    </video>
                    <div className="graphics-project-info">
                        <p className="project-header">Hogwarts</p>
                        <p className="technologies">Technologies Used: TypeScript, WebGL, Webpack</p>
                        <p className="project-description">Computer graphics project for CS4300. Used WebGL to render a 3D model of a simplified
                        Hogwarts with texture, lighting, and an aeroplane that follows a set path around the castle. Added different
                        views of the scene, including from the viewpoint of the plane's pilot, and a turntable view. </p>
                    </div>

                </div>
            </div>

        );

    }


}

export default Projects;