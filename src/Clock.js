import React, { Component } from 'react';


class Clock extends Component {
  constructor(props) {
      super(props);
      this.state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
  }

  // componentWillMount() {
  //   this.getTimeUntil(this.props.props);
  // }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.props), 1000)
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline.split(/\-|\s/).slice(0, 3).reverse().join('-') ) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    const hours = Math.floor((time / (60000 * 60)) % 24);
    const days = Math.floor((time / (60000 * 60 * 24)));

   this.setState({seconds,minutes,hours,days})
  }

  fixingFun(num) {
    if (num < 10 ) {
      return '0' + num;
    }
    if (num === undefined || isNaN(num) ) {
      return 0;
    }
    else return num;
  }

  render(){
    return(
    <div>
      <p className="Clock-days">{this.fixingFun(this.state.days)} dni</p>
      <p className="Clock-hours">{this.fixingFun(this.state.hours)} godzin</p>
      <p className="Clock-minutes">{this.fixingFun(this.state.minutes)} minut</p>
      <p className="Clock-seconds">{this.fixingFun(this.state.seconds)} sekund</p>
    </div>
    )
  }
}

export default Clock;