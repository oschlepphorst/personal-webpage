import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import './App.css';
import Photography from './components/Photography';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div class="box">
      <div className="header">
        <h2 className="App-header">OLIVIA SCHLEPPHORST</h2>
        <nav className="nav">
          <li><Link to={'/'} className="nav-link-home" activeClassName="selectedLink" >HOME</Link></li>
          <li><Link to={'/experience'} className="nav-link-experience" activeClassName="selectedLink" strict>EXPERIENCE</Link></li>
          <li><Link to={'/photography'} className="nav-link-photography" activeClassName="selectedLink" strict>PHOTOGRAPHY</Link></li>
        </nav>
      </div>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/experience' component={Experience} />
          <Route path='/photography' component={Photography} />
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
