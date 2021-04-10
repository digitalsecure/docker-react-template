import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state =  {
      monsters: []
    };
  }

  componentDidMount() {
    console.log('In componentDidMount() function ... ');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }))
      .catch(error=> console.log(error) );
  }


  render() {
    return (
      <div className="container">
        <h1>React Docker Template</h1> 
        <CardList monsters={ this.state.monsters } />
      </div>
    );
  }
}

export default App;
