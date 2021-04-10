import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state =  {
      monsters: [
                    {
                      name: 'Frankenstein',
                      id: 'abc1'
                    },
                    {
                      name: 'Dracula',
                      id: 'abc2'
                    },
                    {
                      name: 'Zombie',
                      id: 'abc3'
                    }
      ]
    };
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
