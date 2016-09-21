import React from 'react';
import {hashHistory} from 'react-router'

export default class AnotherPage extends React.Component {

  _homeVisit(){
    this.props.counterAdd();
    hashHistory.push("/home");
  }

  render() {
    return (
      <div>
        <h1>Another Page</h1>
        <div onClick={this._homeVisit.bind(this)} style={{color: 'black'}}>
          > To homepage
        </div>
      </div>
    );
  }
}