import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Active from './components/Active/Active';
import Add from './components/Add/Add';
import All from './components/All/All';
import Done from './components/Done/Done';
import MenuItem from './components/MenuItem/MenuItem';

function App() {
  return (
    <>
      <Add></Add>
      <Router>
        <MenuItem></MenuItem>
        <Switch>
          <Route path='/all'>
            <All></All>
          </Route>
          <Route path='/active'>
            <Active></Active>
          </Route>
          <Route path='/done'>
            <Done></Done>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
