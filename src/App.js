import React, { Component } from 'react';

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
        <div className="App">
          {
            this.state.monsters.map(monster => <h3 key={monster.id}>{ monster.name }</h3>)
          }
        </div>     
      </div>
    );
  }
}

export default App;
