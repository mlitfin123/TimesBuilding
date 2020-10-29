import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from "axios";
import './App.css';
import Current from './components/currenttenants';
import downtown from './components/downtown';
import Header from './components/header';
import Footer from './components/footer';
import home from './components/home';
import Nav from './components/nav';
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
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";
import Suite202 from './components/suite202fp';
import Suite206 from './components/suite206fp';
import Suite206a from './components/suite206afp';
import Suite206b from './components/suite206bfp';
import Suite209 from './components/suite209fp';
import Suite208 from './components/suite208fp';

function App(props) {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
      <Header />
      <div className="row">
        <div className="column">
          <Nav />
        </div>
        <div className="main">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/1stfloor" component={FirstFloor} />
            <Route exact path="/2ndfloor" component={SecondFloor} />
            <Route exact path="/currenttenants" component={Current} />
            <Route exact path="/availablespace" component={Available} />
            <Route exact path="/downtown" component={downtown} />
            <Route exact path="/contact" component={contact} />
            <Route exact path="/history" component={history} />
            <Route exact path="/basement" component={Basement} />
            <Route exact path="/mainstreet" component={Mainstreet} />
            <Route exact path="/suite101fp" component={Suite101} />
            <Route exact path="/suite102fp" component={Suite102} />
            <Route exact path="/suite103fp" component={Suite103} />
            <Route exact path="/suite202fp" component={Suite202} />
            <Route exact path="/suite203fp" component={Suite203} />
            <Route exact path="/suite203fp" component={Suite203} />
            <Route exact path="/suite206fp" component={Suite206} />
            <Route exact path="/suite206afp" component={Suite206a} />
            <Route exact path="/suite206bfp" component={Suite206b} />
            <Route exact path="/suite209fp" component={Suite209} />
            <Route exact path="/suite207fp" component={Suite207} />
            <Route exact path="/suite208fp" component={Suite208} />
            <Route exact path="/main61fp" component={Main61fp} />
            <Route exact path="/main65fp" component={Main65fp} />
            <Route exact path="/basementfp" component={Basementfp} />
            <PrivateRoute path="/admin" component={Admin} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
