import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Current from './components/currenttenants';
import downtown from './components/downtown';
import Header from './components/header';
import Footer from './components/footer';
import home from './components/home';
import contact from './components/contact';
import history from './components/history';
import Admin from './components/admin';
import Available from './components/availablespace';
import FirstFloor from './components/1stflooroffices';
import SecondFloor from './components/2ndflooroffices';
import Mainstreet from './components/mainstreetretail';
import Basement from './components/basement';
import Suite101 from './components/suite101fp';
import Suite102 from './components/suite102fp';
import Suite103 from './components/suite103fp';
import Suite203 from './components/suite203fp';
import Suite207 from './components/suite207fp';
import Main61fp from './components/main61fp';
import Main65fp from './components/main65fp';
import Basementfp from './components/basementfp';
import Login from './components/login';
import PrivateRoute from './utils/PrivateRoute';
import Suite202 from './components/suite202fp';
import Suite206 from './components/suite206fp';
import Suite206a from './components/suite206afp';
import Suite206b from './components/suite206bfp';
import Suite209 from './components/suite209fp';
import Suite208 from './components/suite208fp';
import { getToken, removeUserSession, setUserSession } from './utils/Common';

function App(props) {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
  
    axios.get(`http://localhost:4001/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/1stfloor" component={FirstFloor} />
          <Route path="/2ndfloor" component={SecondFloor} />
          <Route path="/mainstreet" component={Mainstreet} />
        </Switch>
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/currenttenants" component={Current} />
            <Route path="/availablespace" component={Available} />
            <Route path="/downtown" component={downtown} />
            <Route path="/contact" component={contact} />
            <Route path="/history" component={history} />
            <Route path="/basement" component={Basement} />
            <Route path="/suite101fp" component={Suite101} />
            <Route path="/suite102fp" component={Suite102} />
            <Route path="/suite103fp" component={Suite103} />
            <Route path="/suite202fp" component={Suite202} />
            <Route path="/suite203fp" component={Suite203} />
            <Route path="/suite206fp" component={Suite206} />
            <Route path="/suite206afp" component={Suite206a} />
            <Route path="/suite206bfp" component={Suite206b} />
            <Route path="/suite209fp" component={Suite209} />
            <Route path="/suite207fp" component={Suite207} />
            <Route path="/suite208fp" component={Suite208} />
            <Route path="/main61fp" component={Main61fp} />
            <Route path="/main65fp" component={Main65fp} />
            <Route path="/basementfp" component={Basementfp} />
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
          </Switch>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </Router>
  );
}

export default App;
