import React from 'react';
import {hashHistory} from 'react-router'
import MyForm from '../component/myForm.jsx'

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
        <hr/>
        <h2>Form example</h2>
        <MyForm/>
      </div>
    );
  }
}