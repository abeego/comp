import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Fibonaci calculator</h1>
            <h3>The Fibonaci calculator is state machine</h3>
            <Link to="/">Home</Link> | <Link to="/otherpage">Other Page</Link>
          </header>
          <br />
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
