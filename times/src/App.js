import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import firstFloor from './components/1stflooroffices';
import secondFloor from './components/2ndflooroffices';
import current from './components/currenttenants';
import Header from './components/header';
import home from './components/home';
import Nav from './components/nav';

function App() {
  return (
    <Router>
      <Header />
      <div className="row">
        <div className="column">
          <Nav />
        </div>
        <div className="main">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/1stfloor" component={firstFloor} />
            <Route exact path="/2ndfloor" component={secondFloor} />
            <Route exact path="/currenttenants" component={current} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
