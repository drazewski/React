import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      deadline: '25-12-2017',
      newdeadline: ''
    }
  }

  changeDealine() {
    this.setState({
      deadline: this.state.newdeadline, 
      newdeadline: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Odliczanie do dnia: {this.state.deadline}</h2>
        <Clock deadline={this.state.deadline} />
        
        <input onChange={event => this.setState({newdeadline: event.target.value})} type="text" placeholder="Wpisz nową datę" className=".Deadline-input" />
        <button onClick={() => this.changeDealine()} >Zatwierdz </button>
      </div>
    )
  }
}

export default App