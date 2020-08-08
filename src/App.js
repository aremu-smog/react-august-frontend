import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';


//Prjoects
import Dashboard from './dashboard';
import Landing from './landing';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
