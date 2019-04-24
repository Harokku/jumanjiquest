import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Squad from "./Squad"
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/:squadName" component={Squad}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
