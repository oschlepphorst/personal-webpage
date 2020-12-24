import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience/Experience';
import './App.css';
import Photography from './components/Photography/Photography';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
    <div class="box">
      <div className="header">
        <h2 className="App-header">OLIVIA SCHLEPPHORST</h2>
        <nav className="nav">
          <NavLink to={'/'} className="nav-link-home" activeClassName="selectedLink" exact>HOME</NavLink>
          <NavLink to={'/experience'} className="nav-link-experience" activeClassName="selectedLink" exact>EXPERIENCE</NavLink>
          <NavLink to={'/projects'} className="nav-link-projects" activeClassName="selectedLink" exact>PROJECTS</NavLink>
          <NavLink to={'/photography'} className="nav-link-photography" activeClassName="selectedLink" exact>PHOTOGRAPHY</NavLink>
        </nav>
      </div>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/experience' component={Experience} />
          <Route path='/projects' component={Projects} />
          <Route path='/photography' component={Photography} />
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
