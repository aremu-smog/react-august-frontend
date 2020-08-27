import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


//Prjoects
import Dashboard from './dashboard';
import Landing from './landing';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
