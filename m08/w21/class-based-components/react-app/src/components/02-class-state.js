import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      counter: 3
    }

    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <>
        <h2>{ this.state.name }</h2>
        <button onClick={this.decreaseCounter} >Decrease</button>
        <span style={{ margin: '0 10px' }}>
          { this.state.counter }
        </span>
        <button onClick={this.increaseCounter}>Increase</button>
      </>
    );
  }
}

export default StateExample;