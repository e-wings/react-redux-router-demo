import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="clearfix" style={{backgroundColor:"#cccccc"}}>
        This is Header    |     Visited: {this.props.Counter.times} times.
      </header>
    )
  }
};

