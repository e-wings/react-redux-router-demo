import React from 'react';
import {hashHistory} from 'react-router'

export default class Home extends React.Component {

  _anotherPageVisit(){
    this.props.counterAdd();
    hashHistory.push("/another-page");
  }
  render() {
    return (
      <div>
        <h1>This is homepage</h1>
        <button onClick={this.props.counterAdd}>Add</button>
        {(this.props.counter.times>0) ? <button onClick={this.props.counterReduce}>Reduce</button>:''}
        <div onClick={this._anotherPageVisit.bind(this)} style={{color: 'black'}}>
          <br/>
          > To another page
        </div>
      </div>
    );
  }
}