import React, { Component } from 'react';

export default class extends Component {
  state = {
    count: 0
  }

  climb = () => {
    this.setState(({count}) => ({
      count: count + 1
    }))
  }
  

  render() {
    return (
      <div onClick={this.climb}>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}
