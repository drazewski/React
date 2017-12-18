import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      deadline: '25 grudnia 2018'
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
        <div>
          <p className="Clock-days">Dni: 100</p>
          <p className="Clock-hours">Godzin: 12</p>
          <p className="Clock-minutes">Minut: 17</p>
          <p className="Clock-seconds">Sekund: 55</p>
        </div>
        <form onSubmit={event => {event.preventDefault(); }} >
          <input id="newdate" type="text" placeholder="Wpisz nową datę" className=".Deadline-input" />
          <button onClick={() => {this.changeDeadline(); console.log('button event')} } >Zatwierdz </button>
        </form>
      </div>
    )
  }
}

export default App