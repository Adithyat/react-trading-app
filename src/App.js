import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import { Home, Assets, Details } from './pages';

function App() {
  return (
    <Router>
        <Nav />
        <Switch>
          <Route path="/assets">
            <Assets/>
          </Route>
          <Route path="/details">
            <Details/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;