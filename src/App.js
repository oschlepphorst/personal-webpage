import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';
import Photography from './components/Photography';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div class="box">
      <h2 className="App-header">OLIVIA SCHLEPPHORST</h2>
      <nav>
      <ul className="navbar-nav mr-auto">
        <li><NavLink to={'/home'} className="nav-link-home" activeClassName="selectedLink" > HOME </NavLink></li>
        <li><NavLink to={'/contact'} className="nav-link-contact" activeClassName="selectedLink" strict>CONTACT</NavLink></li>
        <li><NavLink to={'/experience'} className="nav-link-experience" activeClassName="selectedLink" strict>EXPERIENCE</NavLink></li>
        <li><NavLink to={'/photography'} className="nav-link-photography" activeClassName="selectedLink" strict>PHOTOGRAPHY</NavLink></li>
      </ul>
      </nav>
      <hr />
      <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/experience' component={Experience} />
          <Route path='/photography' component={Photography} />
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
