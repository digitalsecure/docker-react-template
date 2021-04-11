import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state =  {
      monsters: [],
      searchField: ''
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
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => { 
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
      <div className="container">
        <h1>React Docker Template</h1> 
        <input type="search" placeholder="search monsters" 
               onChange={ e => this.setState({ searchField: e.target.value }) } />
        <p />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
