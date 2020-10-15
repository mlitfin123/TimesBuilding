import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import firstFloor from './components/1stflooroffices';
import secondFloor from './components/2ndflooroffices';
import available from './components/availablespace';
import current from './components/currenttenants';
import downtown from './components/downtown';
import Header from './components/header';
import Footer from './components/footer';
import home from './components/home';
import Nav from './components/nav';
import contact from './components/contact';
import history from './components/history';
import admin from './components/admin';
import basement from './components/basement';
import mainstreet from './components/mainstreetretail';

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
            <Route exact path="/availablespace" component={available} />
            <Route exact path="/downtown" component={downtown} />
            <Route exact path="/contact" component={contact} />
            <Route exact path="/history" component={history} />
            <Route exact path="/basement" component={basement} />
            <Route exact path="/mainstreet" component={mainstreet} />
            <Route exact path="/admin" component={admin} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
