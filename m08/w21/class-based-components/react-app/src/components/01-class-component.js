/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

/* Function-based */
// function myComponent(props) {
//   return <h2>{props}</h2>
// }

// export default myComponent;


/* Class-based */
class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Mau'
    }
  }

  render () {
    return (
      <>
        <p>{ JSON.stringify(this.props) }</p>
        <p>{ this.state.name }</p>
      </>
    )
  }
}

export default MyComponent;