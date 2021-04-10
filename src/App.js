import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string : 'Hello React Developer!!'
    }
  }

  render() {
    return (
      <div className="container">
        <h1>React Docker Template</h1>
        This template provides the necessary Dockerfile to build a blank react project template.
        <p>
          { this.state.string }
        </p>
        <button onClick={ () => this.setState({string:'Hello React Guru!!'}) }>Change Text</button>
      </div>
    );
  }
}

export default App;
