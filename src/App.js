import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: '25-12-2018'
    }
  }

  changeDeadline() {
    this.setState({
      deadline: document.getElementById('newdate').value
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Odliczanie do dnia: {this.state.deadline}</h2>
        <Clock props={this.state.deadline}/>
        <form onSubmit={event => {event.preventDefault(); }} >
          <input id="newdate" type="text" placeholder="Wpisz nową datę DD-MM-YYYY" className="Deadline-input" />
          <button className="Deadline-button" onClick={() => {this.changeDeadline() } } >Zatwierdz </button>
        </form>
      </div>
    )
  }
}

export default App