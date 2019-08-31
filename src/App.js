import React, { Component } from 'react';

import { CardList } from './components/CardList/CardList'
import { SearchBox } from './components/SearchBox/SearchBox'

import './App.css';


class App extends React.Component {
  state = {
    monsters: [],
    searchField: ''
  }

  // this.handleChange = this.handleChange.bind(this) / for handleChange(e)

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // fetch returns a promise
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    // we make a new array using .filter() method
    // Equivalent to const monsters = this.state.monsters
    // Filtering searches
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search monsters...'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
