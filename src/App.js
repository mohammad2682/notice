import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
// import the Login component
import LoginPage from './components/LoginPage';
import './index.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />{/* add the Login component */}
      </Switch>
    </Router>
  );
};

export default App;