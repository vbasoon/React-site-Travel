import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Navibar from './Components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Users from './Pages/Users/Users';

function App() {
  return (
    <Router>
      <Navibar />
      <Switch>
        <Route exact path="/" render={Home} />
        <Route exact path="/users" render={Users} />
        <Route exact path="/about" render={About} />
      </Switch>

    </Router>

  );
}

export default App;
